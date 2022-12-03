import { prisma } from '../../libs/prismaClient';

async function main() {
  await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Course 1',
          description: 'Course 1 description',
          duration: 10,
        },
      },
      module: {
        create: {
          name: 'Module 1',
          description: 'Module 1 description',
        },
      },
    },
  });
}

main();
