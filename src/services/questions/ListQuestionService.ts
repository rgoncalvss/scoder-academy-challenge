import { ListQuestionRepository } from "@repositories/question/ListQuestionRepository";

export class ListQuestionService {
  private listQuestionRepository: ListQuestionRepository;

  constructor(listQuestionRepository: ListQuestionRepository) {
    this.listQuestionRepository = listQuestionRepository;
  }

  async execute() {
    const questions = await this.listQuestionRepository.execute();

    return questions;
  }
}
