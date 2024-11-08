import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notes_CategoryI } from '../interfaces/Notes_CategoryI';
import { Note } from '../../notes/entities/note.entity';
import { Category } from './category.entity';

@Entity({ name: 'notes_categories' })
export class Notes_Category implements Notes_CategoryI {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Note, (note) => note.id_category)
  @Column({ nullable: false })
  @JoinColumn({ name: 'id_note' })
  idNote: number;
  @ManyToOne(() => Category, (category) => category.id_category_note)
  @Column({ nullable: false })
  @JoinColumn({ name: 'id_category' })
  idCategory: number;
}
