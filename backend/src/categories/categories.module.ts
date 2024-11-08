import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoryRepository } from './repository/categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Notes_Category } from './entities/notes_Category.entity';
import { NotesCategoryRepository } from './repository/notes_Category.repository';
import { SecurityModule } from 'src/config/security/security.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Notes_Category]),
    SecurityModule,
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryRepository, NotesCategoryRepository],
  exports: [
    TypeOrmModule.forFeature([Notes_Category]),
    NotesCategoryRepository,
  ],
})
export class CategoriesModule {}
