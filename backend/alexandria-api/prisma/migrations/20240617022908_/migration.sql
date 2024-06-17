-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" TEXT DEFAULT '',
    "location" TEXT,
    "age" INTEGER,
    "gender" TEXT,
    "interests" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "currentStatusTrack" TEXT,
    "page" INTEGER NOT NULL DEFAULT 10,
    "profile_id" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeriesContent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeriesContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusTrackUser" (
    "id" SERIAL NOT NULL,
    "statusHistory" TEXT[],

    CONSTRAINT "StatusTrackUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentType" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "statusTrackerId" INTEGER,

    CONSTRAINT "ContentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "typeId" TEXT NOT NULL,
    "isbn" TEXT,
    "imageUrl" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numberPages" INTEGER NOT NULL,
    "seriesId" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorContent" (
    "id" TEXT NOT NULL,
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
    "createdById" TEXT,

    CONSTRAINT "AuthorContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToSeriesContent" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContentTypeToSeriesContent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContentToGenre" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthorContentToContent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthorContentToSeriesContent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_content_id_profile_id_key" ON "Collection"("content_id", "profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContentType_title_key" ON "ContentType"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToSeriesContent_AB_unique" ON "_GenreToSeriesContent"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToSeriesContent_B_index" ON "_GenreToSeriesContent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentTypeToSeriesContent_AB_unique" ON "_ContentTypeToSeriesContent"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentTypeToSeriesContent_B_index" ON "_ContentTypeToSeriesContent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContentToGenre_AB_unique" ON "_ContentToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentToGenre_B_index" ON "_ContentToGenre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorContentToContent_AB_unique" ON "_AuthorContentToContent"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorContentToContent_B_index" ON "_AuthorContentToContent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorContentToSeriesContent_AB_unique" ON "_AuthorContentToSeriesContent"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorContentToSeriesContent_B_index" ON "_AuthorContentToSeriesContent"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeriesContent" ADD CONSTRAINT "SeriesContent_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_statusTrackerId_fkey" FOREIGN KEY ("statusTrackerId") REFERENCES "StatusTrackUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ContentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "SeriesContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorContent" ADD CONSTRAINT "AuthorContent_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSeriesContent" ADD CONSTRAINT "_GenreToSeriesContent_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSeriesContent" ADD CONSTRAINT "_GenreToSeriesContent_B_fkey" FOREIGN KEY ("B") REFERENCES "SeriesContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentTypeToSeriesContent" ADD CONSTRAINT "_ContentTypeToSeriesContent_A_fkey" FOREIGN KEY ("A") REFERENCES "ContentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentTypeToSeriesContent" ADD CONSTRAINT "_ContentTypeToSeriesContent_B_fkey" FOREIGN KEY ("B") REFERENCES "SeriesContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToGenre" ADD CONSTRAINT "_ContentToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToGenre" ADD CONSTRAINT "_ContentToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToContent" ADD CONSTRAINT "_AuthorContentToContent_A_fkey" FOREIGN KEY ("A") REFERENCES "AuthorContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToContent" ADD CONSTRAINT "_AuthorContentToContent_B_fkey" FOREIGN KEY ("B") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToSeriesContent" ADD CONSTRAINT "_AuthorContentToSeriesContent_A_fkey" FOREIGN KEY ("A") REFERENCES "AuthorContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorContentToSeriesContent" ADD CONSTRAINT "_AuthorContentToSeriesContent_B_fkey" FOREIGN KEY ("B") REFERENCES "SeriesContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
