import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryI } from '../interfaces/CategoryI';
import { Notes_Category } from './notes_Category.entity';

@Entity({ name: 'categories' })
export class Category implements CategoryI {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true , name : 'category_name'})
  category_name: string;
  @OneToMany(
    () => Notes_Category,
    (notes_category) => notes_category.idCategory,
  )
  id_category_note: number;
}
