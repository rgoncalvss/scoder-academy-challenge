import { FastifyReply, FastifyRequest } from "fastify";
import { CreateQuestionDto, CreateQuestionSchema } from "@interfaces/question/ICreateQuestion";
import { createQuestionService, listQuestionService } from "@services/questions";

export class QuestionController {
  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createQuestionDto: CreateQuestionDto = CreateQuestionSchema.parse(request.body);

    const questionCreated = await createQuestionService.execute(createQuestionDto);

    reply.status(201).send({
      success: true,
      data: questionCreated,
    });
  }

  async list(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const questions = await listQuestionService.execute();

    reply.status(200).send({
      success: true,
      data: [...questions],
    });
  }
}
