export interface NoteI{
    id : number;
    title : string;
    description : string;
    active : 1 | 0;
    archive : 1 | 0;
    author : number;
    created_at : Date;
    id_category : number
}