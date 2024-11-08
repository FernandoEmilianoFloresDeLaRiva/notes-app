import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryI } from '../interfaces';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly _categoryRepository: Repository<Category>,
  ) {}

  async createCategory(category: CreateCategoryI) {
    try {
      const res = await this._categoryRepository.save(category);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findCategoryByName(categoryName: string) {
    try {
      const res = await this._categoryRepository.findOne({
        where: {
          category_name : categoryName,
        },
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(){
    try {
        const res = await this._categoryRepository.find()
        return res
    } catch (error) {
        throw new Error(error);
    }
  }
}
