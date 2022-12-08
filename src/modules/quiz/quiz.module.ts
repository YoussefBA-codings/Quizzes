import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizController } from "src/contollers/quiz.controller";
import { Quiz } from "src/Entities/quiz.entity";
import { QuizService } from "src/services/quiz.service";

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
