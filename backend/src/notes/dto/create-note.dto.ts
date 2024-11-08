import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { CreateNoteI } from '../interfaces/CreateNoteI';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto implements CreateNoteI {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNumber()
  @Min(1)
  author: number;
  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  idCategory: number[];
}
