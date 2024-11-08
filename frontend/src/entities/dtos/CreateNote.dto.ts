import { CreateNoteT } from "../entity";

export class CreateNoteDTO {
  title: string;
  description: string;
  author: number;
  constructor(tokenRes: CreateNoteT, authorId: number) {
    this.title = tokenRes?.title;
    this.description = tokenRes?.description;
    this.author = authorId;
  }
}
