import { z } from "zod";

export const UpdateUserSchema = z.object({
  id: z.string().uuid("Id must be a valid UUID"),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Name cannot be empty")
    .max(100, "Name must be less than 100 characters")
    .trim()
    .optional(),
  correctAnswers: z.number().optional()
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
