import { retriever } from "../rag/retriever.js";
import { ragPrompt } from "../rag/prompt.js";
import { llm } from "../rag/llm.js";

export async function askQuestion(question: string) {
  const documents = await retriever.invoke(question);

  const context = documents
    .map((document) => document.pageContent)
    .join("\n\n");

  const messages = await ragPrompt.invoke({
    context,
    question,
  });

  const response = await llm.invoke(messages);
  console.log(response.usage_metadata);

  return {
    answer: response.content,
    sources: documents.map((document) => ({
      source: document.metadata?.source,
      page: document.metadata?.loc?.pageNumber,
    })),
  };
}