import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Node',
      description: 'Node course',
      duration: 400,
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Libero Neto',
          },
          create: {
            name: 'Libero Neto',
          },
        },
      },
    },
  });

  console.log(result);
}

main();
