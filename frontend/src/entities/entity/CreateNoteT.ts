import { z } from "zod";
import { CreateNoteSchema } from "../../pages/Home/validator/CreateNote.validator";

export type CreateNoteT = z.infer<typeof CreateNoteSchema>;
