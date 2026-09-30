import { vectorStore } from "./vector-store.js";

export async function searchDocuments(question: string) {
  const results = await vectorStore.similaritySearchWithScore(question, 3);

  console.log(
    results.map(([document, score]) => ({
      score,
      content: document.pageContent,
    }))
  );

  return results.map(([document]) => document);
}