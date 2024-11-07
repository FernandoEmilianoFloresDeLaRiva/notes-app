import {z} from "zod"
import { CreateUserSchema } from "../../pages/Login/validator/CreateUser.validator";

export type CreateUserT = z.infer<typeof CreateUserSchema>;