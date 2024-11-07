import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { NotesRepository } from './repository/notes.repository';
import { SecurityModule } from '../config/security/security.module';

@Module({
  imports : [TypeOrmModule.forFeature([Note]), SecurityModule],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule {}
