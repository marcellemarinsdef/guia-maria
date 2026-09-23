/*
  Warnings:

  - You are about to drop the column `createdAt` on the `EmbeddedChunk` table. All the data in the column will be lost.
  - Added the required column `documentId` to the `EmbeddedChunk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmbeddedChunk" DROP COLUMN "createdAt",
ADD COLUMN     "documentId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "KnowledgeDocument" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "contentHash" TEXT NOT NULL,
    "embeddingModel" TEXT NOT NULL,
    "indexedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KnowledgeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KnowledgeDocument_documentId_key" ON "KnowledgeDocument"("documentId");

-- CreateIndex
CREATE INDEX "EmbeddedChunk_documentId_idx" ON "EmbeddedChunk"("documentId");

-- AddForeignKey
ALTER TABLE "EmbeddedChunk" ADD CONSTRAINT "EmbeddedChunk_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "KnowledgeDocument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
