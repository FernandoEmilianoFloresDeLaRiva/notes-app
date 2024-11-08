import { IsNumber, IsString, Min } from 'class-validator';
import { CategoryI } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryDTO implements CategoryI {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  id: number;
  @ApiProperty()
  @IsString()
  category_name: string;
  @ApiProperty()
  @Min(1)
  @IsNumber()
  id_category_note: number;
}
