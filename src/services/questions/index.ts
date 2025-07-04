import { ListQuestionRepository } from "@repositories/question/ListQuestionRepository";
import { CreateQuestionService } from "./CreateQuestionService";
import { createQuestionRepository, listQuestionRepository } from "@repositories/question";
import { ListQuestionService } from "./ListQuestionService";

export const createQuestionService = new CreateQuestionService(
  createQuestionRepository
);

export const listQuestionService = new ListQuestionService(listQuestionRepository);
