import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  deadline: Date;

  @Column()
  isCompleted: boolean;

  @Column()
  isStarred: boolean;
}
