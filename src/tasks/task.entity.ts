import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// TODO: add allowed null values
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 100, nullable: true })
  description: string;

  @Column('datetime', { nullable: true })
  deadline: Date;

  @Column('boolean', { default: false })
  isCompleted: boolean = false;

  @Column('boolean', { default: false })
  isStarred: boolean = false;
}
