import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { NoteI } from "../interfaces/NoteI";
import { User } from "../../users/entities/user.entity"

@Entity({name : 'Notes'})
export class Note implements NoteI{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    title: string;
    @Column({nullable: false})
    description: string;
    @Column({default : 1})
    active: 0 | 1;
    @Column({default : 0})
    archive: 0 | 1;
    @ManyToOne(() => User, (user) => user.id_note)
    @Column({nullable: false,})
    @JoinColumn({ name: 'id_user' })
    author: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
