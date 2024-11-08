import {
  ConflictException,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './repository/categories.repository';

@Injectable()
export class CategoriesService implements OnModuleInit {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const categoryExisiting =
        await this.categoryRepository.findCategoryByName(
          createCategoryDto.category_name,
        );
      if (categoryExisiting) {
        throw new ConflictException('Category already exists');
      }
      const res =
        await this.categoryRepository.createCategory(createCategoryDto);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getAllCategories() {
    try {
      const res = await this.categoryRepository.findAll();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async onModuleInit() {
    const categories = ['Work', 'Development'];
    for (const category of categories) {
      const categoryExisting =
        await this.categoryRepository.findCategoryByName(category);
      if (!categoryExisting) {
        const defaultCategory: CreateCategoryDto = {
          category_name: category,
        };
        await this.categoryRepository.createCategory(defaultCategory);
        console.log(`Default category ${category} created.`);
      } else {
        console.log(`Default category ${category} already existing.`);
      }
    }
  }
}
