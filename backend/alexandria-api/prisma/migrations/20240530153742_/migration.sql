-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "editorialForm" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isbn" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorEditorialContents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorEditorialContents_AB_unique" ON "_AuthorEditorialContents"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorEditorialContents_B_index" ON "_AuthorEditorialContents"("B");

-- AddForeignKey
ALTER TABLE "_AuthorEditorialContents" ADD CONSTRAINT "_AuthorEditorialContents_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorEditorialContents" ADD CONSTRAINT "_AuthorEditorialContents_B_fkey" FOREIGN KEY ("B") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
