import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { embeddings } from "./embeddings.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL não está definida.");
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
