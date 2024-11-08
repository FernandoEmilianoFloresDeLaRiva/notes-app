import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesRepository } from './repository/notes.repository';

@Injectable()
export class NotesService {
  constructor(
    @Inject(NotesRepository) private readonly _noteRepository: NotesRepository,
  ) {}
  async create(createNoteDto: CreateNoteDto) {
    try {
      const res = await this._noteRepository.createNote(
        createNoteDto,
        createNoteDto?.idCategory,
      );

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(idAuthor: number, archiveStatus: 0 | 1) {
    try {
      const res = await this._noteRepository.getNotesByArchiveStatus(
        idAuthor,
        archiveStatus,
      );
      return res;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    try {
      const {idCategory, ...restBody} = updateNoteDto
      const isExisting = await this._noteRepository.getNoteById(id);
      if (!isExisting) {
        throw new NotFoundException('This note was not found');
      }
      const res = await this._noteRepository.updateNote(restBody, id, idCategory);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const isExisting = await this._noteRepository.getNoteById(id);
      if (!isExisting) {
        throw new NotFoundException('This note was not found');
      }
      const res = await this._noteRepository.deleteNote(id);
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number) {
    try {
      const res = await this._noteRepository.getNoteById(id);
      if (!res) {
        throw new NotFoundException('This note was not found');
      }
      return res;
    } catch (error) {
      throw error;
    }
  }
}
