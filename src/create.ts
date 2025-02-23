import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const creatUser = await prisma.user.create({
    data: {
      username: "user10",
      age: 25,
      email: "alimsujon12@gmail.com",
    },
  });
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "this is bio",
  //       userId: 1,
  //     },
  //   });
  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "data mining",
  //     },
  //   });

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "this is title",
  //     content: "this is content",
  //     authorId: 1,
  //     postCategory: {
  // create: {
  //   category: {
  //     connect: {
  //       id: 1,
  //     },
  //   },
  //   categoryId: 3,

  // },
  //       create: [{ categoryId: 3 }, { categoryId: 2 }],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  console.log(creatUser);
};

main();
