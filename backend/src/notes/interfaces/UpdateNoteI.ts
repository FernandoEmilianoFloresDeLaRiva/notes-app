export class UpdateNoteI {
  id?: number;
  title: string;
  description: string;
  active: 1 | 0;
  archive: 1 | 0;
  idCategory?: number[];
}
