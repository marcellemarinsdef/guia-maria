import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 100,
});

export async function splitDocuments(documents: any[]) {
  return splitter.splitDocuments(documents);
}
