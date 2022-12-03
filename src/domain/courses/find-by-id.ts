import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: '957e7bdb-a82b-4a76-abde-284f582db752',
    },
    include: {
      coursesModules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
