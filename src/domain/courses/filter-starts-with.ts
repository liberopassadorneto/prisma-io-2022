import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: 'C',
        mode: 'insensitive',
      },
    },
  });

  console.log(result);
}

main();
