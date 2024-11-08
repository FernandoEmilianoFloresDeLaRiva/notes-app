import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
