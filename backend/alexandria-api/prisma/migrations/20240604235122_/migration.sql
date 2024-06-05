/*
  Warnings:

  - Added the required column `statusTypeId` to the `ContentType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_id_fkey";

-- AlterTable
ALTER TABLE "ContentType" ADD COLUMN     "statusTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_statusTypeId_fkey" FOREIGN KEY ("statusTypeId") REFERENCES "StatusContentypeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
