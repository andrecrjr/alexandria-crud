import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const statusHistory = await prisma.statusTrackUser.create({
    data: {
      statusHistory: ['Reading', 'Completed', 'Paused', 'Abandoned'],
    },
  });

  await prisma.contentType.createMany({
    data: [
      {
        title: 'Book',
        description: 'Type of content for books',
        statusTrackerId: statusHistory.id,
      },
      {
        title: 'Manga',
        description: 'Type of content for manga',
        statusTrackerId: statusHistory.id,
      },
      {
        title: 'Anime',
        description: 'Type of content for anime',
        statusTrackerId: statusHistory.id,
      },
      // Add more content types as needed
    ],
  });

  // Seed data for User
  console.log(await prisma.user.findMany());
  await prisma.user.create({
    data: {
      username: 'exampleUser',
      email: 'user@example.com',
      password: 'securePassword',
      userActive: true,
      profile: {
        create: {
          bio: 'This is an example bio.',
          location: 'Example City',
          age: 30,
          gender: 'Male',
          interests: ['Coding', 'Running', 'Music'],
        },
      },
    },
    include: { profile: true },
  });

  // Seed data for Genre
  await prisma.genre.createMany({
    data: [
      { name: 'Fantasy' },
      { name: 'Adventure' },
      { name: 'Romance' },
      // Add more genres as needed
    ],
  });

  // Seed data for Content
  await prisma.content.create({
    data: {
      title: 'Example Book',
      description: 'An example book description.',
      contentType: { connect: { id: 1 } }, // Assuming ContentType id for Books
      createdBy: { connect: { id: 1 } }, // Assuming User id
      numberPages: 300,
      genres: { connect: [{ id: 1 }] }, // Assuming Genre ids for Fantasy and Adventure
    },
  });

  console.log('Seed executed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
