import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { embeddings } from "./embeddings.js";

const connectionString = process.env.VECTOR_DB_URL;

if (!connectionString) {
  throw new Error("VECTOR_DB_URL não está definida.");
}

const config = {
  postgresConnectionOptions: {
    connectionString,
  },
  tableName: "documents",
  columns: {
    idColumnName: "id",
    vectorColumnName: "embedding",
    contentColumnName: "content",
    metadataColumnName: "metadata",
  },
};

export const vectorStore = await PGVectorStore.initialize(
  embeddings,
  config
);
