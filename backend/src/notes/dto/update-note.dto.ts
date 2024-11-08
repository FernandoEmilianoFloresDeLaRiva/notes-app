import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { UpdateNoteI } from '../interfaces/UpdateNoteI';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto implements UpdateNoteI {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  active: 1 | 0;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  archive: 1 | 0;
  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  idCategory?: number[];
}
