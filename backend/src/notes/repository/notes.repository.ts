import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../entities/note.entity';
import { Repository } from 'typeorm';
import { CreateNoteI } from '../interfaces/CreateNoteI';
import { UpdateNoteDto } from '../dto/update-note.dto';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectRepository(Note) private readonly _noteRepository: Repository<Note>,
  ) {}

  async createNote(noteReq: CreateNoteI) {
    try {
      const res = await this._noteRepository.save(noteReq);
      return res;
    } catch (error) {
      throw new Error(error);
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

  async getNotesByArchiveStatus(idAuthor : number,statusArchive: 0 | 1) {
    try {
      const res = await this._noteRepository.findBy({
        active: 1,
        archive: statusArchive,
        author : idAuthor,
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNoteById(id: number) {
    try {
      const res = await this._noteRepository.findOneBy({
        id: id,
        active: 1,
      });
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
