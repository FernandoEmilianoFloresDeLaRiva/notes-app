import { NoteResponse } from "../entity";
import { Category_NoteI } from "../entity/Category_NoteI";

export class CreateNoteResponse {
  id: number;
  title: string;
  description: string;
  active: number;
  archive: number;
  author: number;
  created_at: string;
  id_category: Category_NoteI[];
  constructor(tokenRes: NoteResponse) {
    this.id = tokenRes?.id;
    this.title = tokenRes?.title;
    this.description = tokenRes?.description;
    this.active = tokenRes?.active;
    this.archive = tokenRes?.archive;
    this.author = tokenRes?.author;
    this.created_at = new Date(tokenRes?.created_at).toLocaleString();
    this.id_category = tokenRes.id_category;
  }
}
