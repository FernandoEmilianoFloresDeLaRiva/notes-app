import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "The min must be at lest 5 characters",
    })
    .max(50, {
      message: "The max length are 50 character",
    }),
  email: z
    .string()
    .email({
      message: "Invalid email address",
    })
    .max(60, {
      message: "The max length are 60 character",
    }),
  password: z
    .string()
    .min(8, {
      message: "The password must be at least 8 characters",
    })
    .max(60, {
      message: "The password max length are 60 characters",
    }),
});
