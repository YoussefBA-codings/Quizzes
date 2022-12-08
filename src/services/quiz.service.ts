import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { cp } from "fs/promises";
import { CreateQuizDto, UpdateQuizDto } from "src/dto/quiz.dto";
import { Quiz } from "src/Entities/quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
  ) {}
  async getAllQuizzes() {
    return await this.quizRepository.find();
  }
  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: number) {
    return await this.quizRepository.findOneById(id);
  }
  async updateQuiz(id: number, body: UpdateQuizDto) {
    await this.quizRepository.update(id, body);
    return await this.quizRepository.findOneById(id);
  }
}
