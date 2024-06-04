/*
  Warnings:

  - You are about to drop the column `name` on the `Collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[content_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "name";

-- CreateIndex
CREATE UNIQUE INDEX "Collection_content_id_key" ON "Collection"("content_id");
