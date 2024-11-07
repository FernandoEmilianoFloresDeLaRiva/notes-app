import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";


export class UpdateNoteDto {
    @IsOptional()
    @IsString()
    title : string;
    @IsString()
    @IsOptional()
    description : string;
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(1)
    active : 1 | 0;
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(1)
    archive : 1 | 0;
}
