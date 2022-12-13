import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AddQuestionDto } from 'dto/question.dto';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service'
@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService, private quizservice: QuizService) {}

  @Get('/')
  getAllQuestions() {
    return this.questionService.getAllQuestions();
  }
  
  @Post('/') 
  async postQuestion(@Body() body: AddQuestionDto) {
    const { quizId } = body;
    const quiz = await this.quizservice.getQuizById(quizId);

    const createdQuestion = this.questionService.addQuestion(body, quiz);

    return createdQuestion;
  }
}
