import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserI } from '../interfaces';
import { Note } from '../../notes/entities/note.entity';

@Entity({ name: 'users' })
export class User implements UserI {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, length: 50 })
  username: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false })
  password: string;
  @OneToMany(() => Note, (note) => note.author)
  id_note: number;
}
