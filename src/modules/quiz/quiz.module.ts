import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from '../../contollers/quiz.controller';
import { Quiz } from '../../Entities/quiz.entity';
import { QuizService } from '../../services/quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
