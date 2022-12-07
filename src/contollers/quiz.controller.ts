import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from 'src/dto/quiz.dto';
import { QuizService } from 'src/services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuizzes() {
    return this.quizService.getAllQuizzes();
  }

  @Post('/')
  //@HttpCode(204)
  @UsePipes(ValidationPipe)
  addNewQuiz(@Body() body: CreateQuizDto) {
    return body;
  }
}
