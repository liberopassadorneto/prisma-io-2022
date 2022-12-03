import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Clean Architecture',
      author_id: '35780bb5-963c-4c59-8201-c731993e23df',
    },
  });

  console.log(result);
}

main();
