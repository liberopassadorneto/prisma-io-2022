import { prisma } from './libs/prismaClient';

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1,
  });
}

main();
