import { IsString } from 'class-validator';
import { CreateCategoryI } from '../interfaces/CreateCategoryI';

export class CreateCategoryDto implements CreateCategoryI {
  @IsString()
  category_name: string;
}
