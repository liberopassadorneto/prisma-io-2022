import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.coursesModules.findMany({
    include: {
      course: true,
      module: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
