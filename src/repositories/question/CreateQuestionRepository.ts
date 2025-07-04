import { CreateQuestionData } from "@interfaces/question/ICreateQuestion";
import { PrismaClient } from "@prisma/client";

export class CreateQuestionRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async execute(createQuestionData: CreateQuestionData) {
    const { title, alternatives, correctAnswerIndex } = createQuestionData;

    return this.prisma.question.create({
      data: {
        title,
        alternatives,
        correctAnswerIndex
      }
    });
  }
}
