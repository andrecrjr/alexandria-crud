import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.book.create({
  //   data: {
  //     title: "Percy Jackson e o ladrão de raios",
  //     publishedAt: new Date('1997-06-26'),
  //     editorialForm: 'livro',
  //     content: 'Fantasy novel',
  //     isbn: '45545454',
  //     price: 29.99,
  //     authors: {
  //       connect: [{ id: author1.id }],
  //     },
  //   },
  // });

  console.log('Inserted seed data');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
