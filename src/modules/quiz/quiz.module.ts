import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from '../../contollers/question.controller';
import { QuizController } from '../../contollers/quiz.controller';
import { Quiz } from '../../Entities/quiz.entity';
import { Question } from '../../Entities/question.entity';
import { QuizService } from '../../services/quiz.service';
import { QuestionService } from '../../services/question.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
