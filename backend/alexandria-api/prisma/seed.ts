import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createContent = async () => {
  const mangasAndBooks = [
    {
      title: 'Naruto Volume 1',
      description: 'The story of a young ninja.',
      contentTypeId: 1,
      isbn: '9781569319000',
      imageUrl: 'https://example.com/naruto1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'One Piece Volume 1',
      description: 'Adventures of Monkey D. Luffy.',
      contentTypeId: 1,
      isbn: '9781569319017',
      imageUrl: 'https://example.com/onepiece1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Attack on Titan Volume 1',
      description: 'Humanity fights against Titans.',
      contentTypeId: 1,
      isbn: '9781612620244',
      imageUrl: 'https://example.com/aot1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'My Hero Academia Volume 1',
      description: 'A world of superheroes.',
      contentTypeId: 1,
      isbn: '9781421582696',
      imageUrl: 'https://example.com/mha1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Demon Slayer Volume 1',
      description: 'The journey of Tanjiro.',
      contentTypeId: 1,
      isbn: '9781974700523',
      imageUrl: 'https://example.com/demonslayer1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Dragon Ball Volume 1',
      description: 'The adventures of Goku.',
      contentTypeId: 1,
      isbn: '9781569319208',
      imageUrl: 'https://example.com/dragonball1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Death Note Volume 1',
      description: 'A notebook of death.',
      contentTypeId: 1,
      isbn: '9781421501680',
      imageUrl: 'https://example.com/deathnote1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Tokyo Ghoul Volume 1',
      description: 'A world of ghouls.',
      contentTypeId: 1,
      isbn: '9781421580364',
      imageUrl: 'https://example.com/tokyoghoul1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Fullmetal Alchemist Volume 1',
      description: 'The journey of the Elric brothers.',
      contentTypeId: 1,
      isbn: '9781591169208',
      imageUrl: 'https://example.com/fma1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: 'Bleach Volume 1',
      description: 'The story of Ichigo Kurosaki.',
      contentTypeId: 1,
      isbn: '9781591164418',
      imageUrl: 'https://example.com/bleach1.jpg',
      createdById: 1,
      numberPages: 200,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      description: 'The first book in the Harry Potter series.',
      contentTypeId: 2,
      isbn: '9780439708180',
      imageUrl: 'https://example.com/harrypotter1.jpg',
      createdById: 1,
      numberPages: 309,
    },
    {
      title: 'The Hobbit',
      description: 'A fantasy novel by J.R.R. Tolkien.',
      contentTypeId: 2,
      isbn: '9780345339683',
      imageUrl: 'https://example.com/hobbit.jpg',
      createdById: 1,
      numberPages: 310,
    },
    {
      title: 'The Catcher in the Rye',
      description: 'A novel by J.D. Salinger.',
      contentTypeId: 2,
      isbn: '9780316769488',
      imageUrl: 'https://example.com/catcherintherye.jpg',
      createdById: 1,
      numberPages: 277,
    },
    {
      title: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee.',
      contentTypeId: 2,
      isbn: '9780061120084',
      imageUrl: 'https://example.com/tokillamockingbird.jpg',
      createdById: 1,
      numberPages: 324,
    },
    {
      title: '1984',
      description: 'A novel by George Orwell.',
      contentTypeId: 2,
      isbn: '9780451524935',
      imageUrl: 'https://example.com/1984.jpg',
      createdById: 1,
      numberPages: 328,
    },
  ];

  for (const item of mangasAndBooks) {
    await prisma.content.create({
      data: item,
    });
  }
  return true;
};

async function main() {
  // const statusHistory = await prisma.statusTrackUser.create({
  //   data: {
  //     statusHistory: ['Reading', 'Completed', 'Paused', 'Abandoned'],
  //   },
  // });

  // await prisma.contentType.createMany({
  //   data: [
  //     {
  //       title: 'Book',
  //       description: 'Type of content for books',
  //       statusTrackerId: statusHistory.id,
  //     },
  //     {
  //       title: 'Manga',
  //       description: 'Type of content for manga',
  //       statusTrackerId: statusHistory.id,
  //     },
  //     {
  //       title: 'Anime',
  //       description: 'Type of content for anime',
  //       statusTrackerId: statusHistory.id,
  //     },
  //     // Add more content types as needed
  //   ],
  // });

  // // Seed data for User
  // console.log(await prisma.user.findMany());
  // await prisma.user.create({
  //   data: {
  //     username: 'exampleUser',
  //     email: 'user@example.com',
  //     password: 'securePassword',
  //     userActive: true,
  //     profile: {
  //       create: {
  //         bio: 'This is an example bio.',
  //         location: 'Example City',
  //         age: 30,
  //         gender: 'Male',
  //         interests: ['Coding', 'Running', 'Music'],
  //       },
  //     },
  //   },
  //   include: { profile: true },
  // });

  // // Seed data for Genre
  // await prisma.genre.createMany({
  //   data: [
  //     { name: 'Fantasy' },
  //     { name: 'Adventure' },
  //     { name: 'Romance' },
  //     // Add more genres as needed
  //   ],
  // });

  // // Seed data for Content
  // await prisma.content.create({
  //   data: {
  //     title: 'Example Book',
  //     description: 'An example book description.',
  //     contentType: { connect: { id: 1 } }, // Assuming ContentType id for Books
  //     createdBy: { connect: { id: 1 } }, // Assuming User id
  //     numberPages: 300,
  //     genres: { connect: [{ id: 1 }] }, // Assuming Genre ids for Fantasy and Adventure
  //   },
  // });
  await createContent();

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
