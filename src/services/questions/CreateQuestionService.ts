import { HTTPError } from "@config/errors";
import { CreateQuestionDto } from "@interfaces/question/ICreateQuestion";
import { CreateQuestionRepository } from "@repositories/question/CreateQuestionRepository";

export class CreateQuestionService {
  private createQuestionRepository: CreateQuestionRepository;

  constructor(
    createQuestionRepository: CreateQuestionRepository,
  ) {
    this.createQuestionRepository = createQuestionRepository;
  }

  async execute(createQuestionDto: CreateQuestionDto) {
    return this.createQuestionRepository.execute(createQuestionDto);
  }
}
