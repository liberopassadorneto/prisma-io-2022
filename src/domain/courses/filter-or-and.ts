import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'ReactJS',
          },
        },
        {
          name: {
            contains: 'React Native',
          },
        },
      ],
      AND: {
        duration: 600,
      },
    },
  });

  console.log(result);
}

main();
