import prisma from "@config/postgres";
import { CreateQuestionRepository } from "./CreateQuestionRepository";
import { ListQuestionRepository } from "./ListQuestionRepository";

export const createQuestionRepository = new CreateQuestionRepository(prisma);
export const listQuestionRepository = new ListQuestionRepository(prisma);
