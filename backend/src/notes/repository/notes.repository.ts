import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../entities/note.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateNoteI } from '../interfaces/CreateNoteI';
import { UpdateNoteDto } from '../dto/update-note.dto';
import { NotesCategoryRepository } from 'src/categories/repository/notes_Category.repository';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectRepository(Note) private readonly _noteRepository: Repository<Note>,
    @Inject(NotesCategoryRepository)
    private readonly _notesCategoryRepository: NotesCategoryRepository,
    private readonly dataSource: DataSource,
  ) {}

  async createNote(noteReq: CreateNoteI, categories: number[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const res = await this._noteRepository.create(noteReq);
      const savedNote = await queryRunner.manager.save(res);

      for (const categoryId of categories) {
        const categoryRes =
          await this._notesCategoryRepository.createNoteCategory({
            idNote: savedNote.id,
            idCategory: categoryId,
          });
        await queryRunner.manager.save(categoryRes);
      }
      await queryRunner.commitTransaction();
      return savedNote;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error(error);
    } finally {
      await queryRunner.release();
    }
  }

  async updateNote(noteUpdateReq: UpdateNoteDto, idReq: number) {
    try {
      const res = await this._noteRepository.update(
        {
          id: idReq,
        },
        noteUpdateReq,
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteNote(idReq: number) {
    try {
      const res = await this._noteRepository.update(
        {
          id: idReq,
        },
        {
          active: 0,
        },
      );
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNotesByArchiveStatus(idAuthor: number, statusArchive: 0 | 1) {
    try {
      const res = await this._noteRepository.find({
        where: {
          active: 1,
          archive: statusArchive,
          author: idAuthor,
        },
        relations: ['id_category'],
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNoteById(id: number) {
    try {
      const res = await this._noteRepository.findOne({
        where: {
          id: id,
          active: 1,
        },
        relations: ['id_category'],
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
