import { prisma } from '../../libs/prismaClient';

async function main() {
  await prisma.coursesModules.create({
    data: {
      fk_course_id: '957e7bdb-a82b-4a76-abde-284f582db752',
      fk_module_id: '095c4e97-df8a-4bda-8146-a370dc1d20d0',
    },
  });
}

main();
