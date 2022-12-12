import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn({
    comment: 'The quiz must have unique identifier',
  })
    id: number;

  @Column()
    title: string;

  @Column()
    description: string;
}
