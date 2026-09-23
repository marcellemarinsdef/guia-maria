import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";


export async function loadPdf(path: string) {
  const loader = new PDFLoader(path);

  return loader.load();
} 


export async function loadCsv(path: string) {
  const loader = new CSVLoader(path);

  return loader.load();
}

export async function loadText(path: string){
  const loader = new TextLoader(path);

  return loader.load();
}

export async function loadDocx(path: string){
  const loader = new DocxLoader(path);

  return loader.load();
}