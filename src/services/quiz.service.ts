import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto, UpdateQuizDto } from '../dto/quiz.dto';
import { Quiz } from '../Entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async getAllQuizzes() {
    return this.quizRepository.find();
  }

  async createQuiz(quiz: CreateQuizDto) {
    return this.quizRepository.save(quiz);
  }

  async getQuizById(id: number) {
    return this.quizRepository.findOneById(id);
  }

  async updateQuiz(id: number, body: UpdateQuizDto) {
    await this.quizRepository.update(id, body);
    return this.quizRepository.findOneById(id);
  }
}
