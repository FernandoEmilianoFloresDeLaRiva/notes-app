import { CreateNoteT } from "../entity";

export class CreateNoteDTO {
  title: string;
  description: string;
  author: number;
  idCategory?: number[];
  constructor(
    tokenRes: CreateNoteT,
    authorId: number,
    categories: number[] = []
  ) {
    this.title = tokenRes?.title;
    this.description = tokenRes?.description;
    this.author = authorId;
    if (categories.length > 0) {
      this.idCategory = categories;
    }
  }
}
