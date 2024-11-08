export interface NoteResponse {
  id: number;
  title: string;
  description: string;
  active: number;
  archive: number;
  author: number;
  created_at: string;
  id_category: {
    id: number;
    idNote: number;
    idCategory: number;
  }[];
}
