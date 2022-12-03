import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'React Native',
      description: 'React Native course',
      duration: 400,
      teacher: {
        connect: {
          id: '516f26af-5e65-4502-ba81-8422720c96f6',
        },
      },
    },
  });

  console.log(result);
}

main();
