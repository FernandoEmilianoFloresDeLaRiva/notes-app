import { z } from "zod";

export const CreateNoteSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "The title must be at least 1 characters",
    })
    .max(60, {
      message: "The max length are 60 character",
    }),
  description: z
    .string()
    .min(1, {
      message: "The description must be at least 1 characters",
    })
    .max(60, {
      message: "The description max length are 200 characters",
    }),
});
