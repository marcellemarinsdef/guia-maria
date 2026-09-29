import { searchDocuments } from "../rag/retriever.js";
import { ragPrompt } from "../rag/prompt.js";
import { llm } from "../rag/llm.js";
import {
  getHistory,
  addHistory,
  formatHistory,
} from "../rag/history.js";
import { contextualizePrompt } from "../rag/contextualize-prompt.js";

export async function askQuestion(conversationId: string, question: string) {
  const history = getHistory(conversationId);
  const formattedHistory = formatHistory(history);

  const contextualizedMessages = await contextualizePrompt.invoke({
    history: formattedHistory,
    question,
  });

  const contextualizedResponse = await llm.invoke(contextualizedMessages);
  const searchQuestion = contextualizedResponse.content.toString().trim();

  console.log("PERGUNTA CONTEXTUALIZADA: ");
  console.log(searchQuestion);

  const documents = await searchDocuments(searchQuestion);

  const context = documents
    .map((document) => document.pageContent)
    .join("\n\n");

  const messages = await ragPrompt.invoke({
    context,
    question: searchQuestion,
    history: formattedHistory,
  });

  const response = await llm.invoke(messages);

  console.log("Usage Metadata:", response.usage_metadata);
  console.log("Contexto recuperado:\n", context);

  const answer = response.content.toString().trim();

  addHistory(conversationId, question, answer);

  console.log("conversationId:", conversationId);
  console.log("history:", history);

  return {
    answer,
    sources: documents.map((document) => ({
      source: document.metadata?.source,
      page: document.metadata?.loc?.pageNumber,
    })),
  };
}
