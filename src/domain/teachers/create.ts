import { prisma } from '../../libs/prismaClient';

async function main() {
  await prisma.teachers.create({
    data: {
      name: 'Diego Fernandes',
    },
  });
}

main();
