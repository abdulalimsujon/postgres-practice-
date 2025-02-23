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
  const result = await prisma.post.upsert({
    where: {
      id: 10,
    },
    update: {
      title: "this is for testing upsert",
    },
    create: {
      title: "here is upsert",
      content: "this is for content",
    },
  });
  console.log(result);
};
main();
