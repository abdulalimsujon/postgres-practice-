import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fitering = async () => {
  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  // include: {
  //   Post: true,
  // },
  //   });
  // .Post();

  //   console.log(result);

  const result = await prisma.post.findMany({
    where: {
      AND: [
        {
          published: true,
        },
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });
};

fitering();
