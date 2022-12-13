import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from './question.entity';

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
  
  @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];
    
}
