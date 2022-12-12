import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../../Entities/question.entity';
import { QuestionService } from '../../services/question.service';
import { QuestionController } from '../../contollers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionsModule {}
