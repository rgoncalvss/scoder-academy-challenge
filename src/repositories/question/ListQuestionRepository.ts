import { PrismaClient } from "@prisma/client";

export class ListQuestionRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async execute() {
    return this.prisma.question.findMany();
  }
}
