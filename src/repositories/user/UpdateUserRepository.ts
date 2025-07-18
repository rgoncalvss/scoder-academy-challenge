import { PrismaClient } from "@prisma/client";
import { UpdateUserDto } from "@interfaces/user/IUpdateUser";

export class UpdateUserRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async execute(updateUserData: UpdateUserDto) {
    const { id, name, correctAnswers} = updateUserData;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        correctAnswers
      },
    });
  }
}
