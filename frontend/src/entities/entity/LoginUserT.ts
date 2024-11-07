import { z } from "zod";
import { LoginUserSchema } from "../../pages/Login/validator/LoginUser.validator";

export type LoginUserT = z.infer<typeof LoginUserSchema>;
