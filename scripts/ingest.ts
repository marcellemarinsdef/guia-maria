import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { loadCsv, loadDocx, loadPdf, loadText} from "../src/rag/loader.js";
import { splitDocuments } from "../src/rag/splitter.js";
import { vectorStore } from "../src/rag/vector-store.js";
import { hashChunk } from "../src/rag/chunk-hash.js";
import { hashDocument } from "../src/rag/document-hash.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL não está definida.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const EMBEDDING_MODEL = "text-embedding-3-small";
const BATCH_SIZE = 100;

type DocumentConfig = {
  path: string;
  documentId: string;
  documentName: string;
  documentType: string;
  version: string;
  source: string;
};

const documentsConfig: DocumentConfig[] = [
  {
    path: "src/documents/exemplo5.txt",
    documentId: "exemplo5",
    documentName: "exemplo5",
    documentType: "txt",
    version: "1.0",
    source: "local",
  },
];

async function main() {
  for (const config of documentsConfig) {
    console.log(`\n========================================`);
    console.log(`Processando: ${config.documentName}`);
    console.log(`========================================`);

    const documentHash = await hashDocument(config.path);

    console.log(`Hash do documento: ${documentHash}`);


    const existingDocument =
      await prisma.knowledgeDocument.findUnique({
        where: {
          documentId: config.documentId,
        },
      });


    if (
      existingDocument &&
      existingDocument.contentHash === documentHash &&
      existingDocument.embeddingModel === EMBEDDING_MODEL
    ) {
      console.log(
        `Documento "${config.documentName}" já está indexado.`
      );

      console.log("Nenhuma alteração detectada. Ignorando.");

      continue;
    }


    console.log(
      existingDocument
        ? "Alteração detectada. Documento será reprocessado."
        : "Documento ainda não foi indexado. Processando."
    );


    const documents = await chooseLoader(
      config.documentType,
      config.path
    );

    console.log(
      `Documentos carregados: ${documents.length}`
    );


    for (const document of documents) {
      document.metadata = {
        ...document.metadata,

        documentId: config.documentId,
        documentName: config.documentName,
        documentType: config.documentType,
        version: config.version,
        source: config.source,
      };
    }


    const chunks = await splitDocuments(documents);

    console.log(`Chunks gerados: ${chunks.length}`);


    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE);

      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(
        chunks.length / BATCH_SIZE
      );

      console.log(
        `\nBatch ${batchNumber}/${totalBatches} ` +
        `(${i + 1}-${Math.min(
          i + BATCH_SIZE,
          chunks.length
        )} de ${chunks.length})`
      );

      const newChunks: Array<{
        chunk: (typeof batch)[number];
        hash: string;
      }> = [];


      for (const chunk of batch) {
        const hash = hashChunk(
          chunk.pageContent,
          EMBEDDING_MODEL
        );

        const existingChunk =
          await prisma.embeddedChunk.findUnique({
            where: {
              contentHash: hash,
            },
          });

        if (existingChunk) {
          console.log(
            `Chunk já existe: ${hash.substring(0, 12)}...`
          );

          continue;
        }

        newChunks.push({
          chunk,
          hash,
        });
      }

      if (newChunks.length === 0) {
        console.log(
          "Nenhum chunk novo nesse batch."
        );

        continue;
      }


      console.log(
        `Gerando embeddings para ${newChunks.length} chunks...`
      );

      await vectorStore.addDocuments(
        newChunks.map((item) => item.chunk)
      );


      console.log(
        `${newChunks.length} chunks novos processados.`
      );
    }


    const knowledgeDocument =
      await prisma.knowledgeDocument.upsert({
        where: {
          documentId: config.documentId,
        },

        create: {
          documentId: config.documentId,
          documentName: config.documentName,
          documentType: config.documentType,
          version: config.version,
          source: config.source,
          filePath: config.path,
          contentHash: documentHash,
          embeddingModel: EMBEDDING_MODEL,
        },

        update: {
          documentName: config.documentName,
          documentType: config.documentType,
          version: config.version,
          source: config.source,
          filePath: config.path,
          contentHash: documentHash,
          embeddingModel: EMBEDDING_MODEL,
        },
      });

    console.log(
      `KnowledgeDocument registrado: ${knowledgeDocument.id}`
    );

    console.log(
      `\nDocumento "${config.documentName}" indexado com sucesso.`
    );
  }
}

async function chooseLoader(
  documentType: string,
  path: string
) {
  switch (documentType) {
    case "pdf":
      return loadPdf(path);

    case "csv":
      return loadCsv(path);

    case "docx":
      return loadDocx(path);

    case "txt":
      return loadText(path);

    default:
      throw new Error(
        `Tipo de documento não suportado: ${documentType}`
      );
  }
}

main()
  .catch((error) => {
    console.error("\nErro durante o ingest:", error);

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });