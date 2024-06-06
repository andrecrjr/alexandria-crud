-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_content_id_fkey";

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "AuthorContent" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "bio" TEXT,
    "born" TIMESTAMP(3),
    "died" TIMESTAMP(3),
    "nationality" TEXT,
    "awards" TEXT[],
    "photoUrl" TEXT,
    "website" TEXT,
    "genres" TEXT[],
    "socialMedia" JSONB,
    "bestSellers" TEXT[],
    "influences" TEXT[],
    "influenced" TEXT[],
    "createdById" INTEGER,

    CONSTRAINT "AuthorContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorContentToContent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorContentToContent_AB_unique" ON "_AuthorContentToContent"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorContentToContent_B_index" ON "_AuthorContentToContent"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorContent" ADD CONSTRAINT "AuthorContent_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToContent" ADD CONSTRAINT "_AuthorContentToContent_A_fkey" FOREIGN KEY ("A") REFERENCES "AuthorContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToContent" ADD CONSTRAINT "_AuthorContentToContent_B_fkey" FOREIGN KEY ("B") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
