import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
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

  const publistedPostUser = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publistedPostUser, { depth: Infinity });
};

relationalQueries();
