import { prisma } from '../../libs/prismaClient';

async function main() {
  await prisma.modules.create({
    data: {
      name: 'Prisma',
      description: 'Learn how to use Prisma with TypeScript',
      coursesModules: {
        create: {
          course: {
            connect: {
              id: 'fd243141-468d-4304-9ec2-5c9c827bac46',
            },
          },
        },
      },
    },
  });
}

main();
