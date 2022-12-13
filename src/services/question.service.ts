import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../Entities/question.entity';
import { Repository } from 'typeorm';
import { AddQuestionDto } from 'dto/question.dto';
import { Quiz } from 'Entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  getAllQuestions() {
    return this.questionsRepository.find();
  }
  
  async addQuestion(body: AddQuestionDto, quiz: Quiz | null) {
    const createdQuestion = await this.questionsRepository.save({ question: body.question });
    if (quiz) {
      quiz.questions.push(createdQuestion);
      await this.quizRepository.save(quiz);
    }
    
    const getQuestionWithRelation = await this.questionsRepository.findOne({
      where: { id: createdQuestion.id },
      relations: ['quiz'],
    });
    
    return getQuestionWithRelation;
  }
}
