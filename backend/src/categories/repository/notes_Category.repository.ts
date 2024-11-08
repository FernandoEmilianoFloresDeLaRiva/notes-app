import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { CreateNoteCategoriesI } from '../interfaces';
import { Notes_Category } from '../entities/notes_Category.entity';

@Injectable()
export class NotesCategoryRepository {
  constructor(
    @InjectRepository(Notes_Category)
    private readonly _notesCategoryRepository: Repository<Notes_Category>,
  ) {}

  async createNoteCategory(reqNoteCategory: CreateNoteCategoriesI) {
    try {
      const res = await this._notesCategoryRepository.create(reqNoteCategory);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteNoteCategory(id: number) {
    try {
      const res = await this._notesCategoryRepository.delete(id);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateNoteCategory(idNote: number, idCategories: number[]) {
    await this._notesCategoryRepository.manager.transaction(async (manager) => {
      await manager.delete(Notes_Category, {
        idNote: idNote,
        idCategory: Not(In(idCategories)),
      });

      const existingCategories = await this._notesCategoryRepository.find({
        where: {
          idNote: idNote,
          idCategory: In(idCategories),
        },
        select: ['idCategory'],
      });

      const existingCategoryIds = existingCategories.map(
        (cat) => cat.idCategory,
      );
      const newCategories = idCategories
        .filter((id) => !existingCategoryIds.includes(id))
        .map((idCategory) => ({
          idNote,
          idCategory,
        }));

      if (newCategories.length) {
        await manager.insert(Notes_Category, newCategories);
      }
    });
  }
}
