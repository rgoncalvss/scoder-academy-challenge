import { z } from "zod";

export const CreateQuestionSchema = z.object({
  title: z
    .string({
      required_error: "Question title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(1, "Title cannot be empty")
    .max(200, "Title must be less than 200 characters")
    .trim(),

  alternatives: z
    .array(
      z.string().min(1, "Alternative cannot be empty").max(200, "Alternative must be less than 200 characters")
    )
    .length(4, "You must provide exactly 4 alternatives"),

  correctAnswerIndex: z
    .number({
      required_error: "Correct answer index is required",
      invalid_type_error: "Correct answer index must be a number",
    })
    .int("Correct answer index must be an integer")
    .min(0, "Correct answer index must be between 0 and 3")
    .max(3, "Correct answer index must be between 0 and 3"),
});

export type CreateQuestionDto = z.infer<typeof CreateQuestionSchema>;
export type CreateQuestionData = CreateQuestionDto;
