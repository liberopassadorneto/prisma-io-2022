import { prisma } from './libs/prismaClient';

async function main() {
  await prisma.courses.deleteMany();
}

main();
