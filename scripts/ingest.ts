import "dotenv/config";

import { loadPdf } from "../src/rag/loader.js";
import { splitDocuments } from "../src/rag/splitter.js";
import { vectorStore } from "../src/rag/vector-store.js";

type DocumentConfig = {
  path: string;
  documentId: string;
  documentName: string;
  documentType: string;
  version: string;
};

const documentsConfig: DocumentConfig[] = [
  {
    path: "src/documents/exemplo.pdf",
    documentId: "exemplo-001",
    documentName: "exemplo",
    documentType: "exemplo",
    version: "1.0",
  },
  {
    path: "src/documents/exemplo2.pdf",
    documentId: "exemplo-002",
    documentName: "exemplo2",
    documentType: "exemplo",
    version: "1.0",
  },
];

async function main() {
  for (const config of documentsConfig) {
    console.log(`Processando: ${config.documentName}`);

    const documents = await loadPdf(config.path);

    for (const document of documents) {
      document.metadata = {
        ...document.metadata,
        documentId: config.documentId,
        documentName: config.documentName,
        documentType: config.documentType,
        version: config.version,
      };
    }

    const chunks = await splitDocuments(documents);

    console.log(`Chunks gerados: ${chunks.length}`);

    await vectorStore.addDocuments(chunks);

    console.log(`${config.documentName} indexado com sucesso.`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});