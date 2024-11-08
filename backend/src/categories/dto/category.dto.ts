import { IsNumber, IsString, Min } from 'class-validator';
import { CategoryI } from '../interfaces';

export class CategoryDTO implements CategoryI {
  @IsNumber()
  @Min(1)
  id: number;
  @IsString()
  category_name: string;
  @Min(1)
  @IsNumber()
  id_category_note: number;
}
