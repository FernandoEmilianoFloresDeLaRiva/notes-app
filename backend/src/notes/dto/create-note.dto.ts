import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { CreateNoteI } from "../interfaces/CreateNoteI";

export class CreateNoteDto implements CreateNoteI{
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNumber()
    @Min(1)
    author: number;
}
