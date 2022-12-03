import { prisma } from '../../libs/prismaClient';

async function main() {
  await prisma.coursesModules.delete({
    where: {
      id: 'c536e1b8-e8ae-4dd2-bccb-2b4dd1a2728c',
    },
  });
}

main();
