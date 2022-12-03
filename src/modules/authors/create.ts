import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Mayk Brito',
      books: {
        createMany: {
          data: [
            {
              name: 'ReactJS',
            },
            {
              name: 'React Native',
            },
          ],
        },
      },
    },
  });

  console.log(result);
}

main();
