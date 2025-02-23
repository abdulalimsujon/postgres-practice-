import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(result);
  const result = await prisma.post.findMany({
    skip: 2,
    take: 2,
  });
  console.log(result);
};
main();
