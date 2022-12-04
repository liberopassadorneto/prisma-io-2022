import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'ReactJS',
      description: 'ReactJS course',
      duration: 600,
      // teacher: {
      //   connectOrCreate: {
      //     where: {
      //       name: 'Libero Neto',
      //     },
      //     create: {
      //       name: 'Libero Neto',
      //     },
      //   },
      // },
    },
  });

  console.log(result);
}

main();
