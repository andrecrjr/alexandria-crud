import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const contentData = [
  {
    title: 'O Poder do Hábito',
    description: 'Um livro sobre como hábitos são formados e transformados.',
    typeId: 1, // Supondo que este ID corresponde a um ContentType existente
    isbn: '1234567890',
    imageUrl: 'http://example.com/image.jpg',
    numberPages: 400,
  },
  {
    title: 'As Vantagens de Ser Invisível',
    description:
      'Um romance sobre adolescência e as complexidades da passagem para a vida adulta.',
    typeId: 1, // Supondo que este ID corresponde a um ContentType existente
    isbn: '1594746036',
    imageUrl: 'http://example.com/image2.jpg',
    numberPages: 224,
  },
  {
    title: '1984',
    description:
      'Uma distopia clássica sobre vigilância governamental e totalitarismo.',
    typeId: 1,
    isbn: '0451524934',
    imageUrl: 'http://example.com/image3.jpg',
    numberPages: 328,
  },
  // Adicione mais objetos de conteúdo conforme necessário
];

// const statusData = [
//   {
//     name: ['Lendo', 'Pausado', 'Lido'],
//   },
//   // Adicione mais objetos de status conforme necessário
// ];

const authorData = [
  {
    name: 'Charles Duhigg',
    bio: 'Autor de livros sobre hábitos e produtividade.',
    born: new Date('1974-03-09'),
    nationality: 'Americano',
    awards: ['Prêmio Pulitzer'],
    genres: ['Autoajuda', 'Negócios'],
    bestSellers: ['O Poder do Hábito'],
  },
  {
    name: 'Stephen Chbosky',
    bio: 'Autor conhecido por seu romance de estreia que se tornou um best-seller.',
    born: new Date('1970-01-25'),
    nationality: 'Americano',
    awards: [],
    genres: ['Romance', 'Young Adult'],
    bestSellers: ['As Vantagens de Ser Invisível'],
  },
  {
    name: 'George Orwell',
    bio: 'Escritor e jornalista britânico, famoso por suas obras satíricas contra totalitarismo.',
    born: new Date('1903-06-25'),
    died: new Date('1950-01-21'),
    nationality: 'Britânico',
    awards: [],
    genres: ['Distopia', 'Ficção Política', 'Sátira'],
    bestSellers: ['1984', 'A Revolução dos Bichos'],
  },
  // Adicione mais objetos de autor conforme necessário
];

async function main() {
  // Seed StatusContentTypeUser
  // for (const status of statusData) {
  //   await prisma.statusContentypeUser.create({
  //     data: status,
  //   });
  // }
  await prisma.content.deleteMany();
  await prisma.contentType.deleteMany();

  // Seed AuthorContent
  // const authors = [];
  // for (const author of authorData) {
  //   const createdAuthor = await prisma.authorContent.create({
  //     data: author,
  //   });
  //   authors.push(createdAuthor);
  // }

  // // Seed Content e vincule com AuthorContent
  // for (const content of contentData) {
  //   await prisma.content.create({
  //     data: {
  //       ...content,
  //       authors: {
  //         connect: authors.map((author) => ({ id: author.id })),
  //       },
  //     },
  //   });
  // }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
