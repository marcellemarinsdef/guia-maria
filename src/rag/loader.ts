import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function loadPdf(path: string) {
  const loader = new PDFLoader(path);

  return loader.load();
}