import { prisma } from './libs/prismaClient';

async function main() {
  await prisma.courses.update({
    where: {
      id: '3b649f52-d0e0-4e81-b089-39a8c282a30c',
    },
    data: {
      duration: 1000,
    },
  });
}

main();
