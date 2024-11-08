import {z} from "zod"
import { CreateUserSchema } from "../../pages/Register/validator/CreateUser.validator";

export type CreateUserT = z.infer<typeof CreateUserSchema>;