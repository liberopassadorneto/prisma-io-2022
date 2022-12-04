import { Prisma, Modules } from '@prisma/client';
import Module from 'module';
import { prisma } from '../../libs/prismaClient';

async function main() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM modules`
  );

  result.map((module) => console.log(module.name));
  // console.log(result);
}

main();
