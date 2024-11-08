import { IsString } from 'class-validator';
import { CreateCategoryI } from '../interfaces/CreateCategoryI';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto implements CreateCategoryI {
  @ApiProperty()
  @IsString()
  category_name: string;
}
