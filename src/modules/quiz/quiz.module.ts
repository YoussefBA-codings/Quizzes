import { Module } from '@nestjs/common';
import { QuizController } from 'src/contollers/quiz.controller';
import { QuizService } from 'src/services/quiz.service';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
