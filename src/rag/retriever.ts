import { vectorStore } from "./vector-store.js";

export const retriever = vectorStore.asRetriever({
  k: 3,
});
