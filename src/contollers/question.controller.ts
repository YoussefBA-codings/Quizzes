import { Controller, Get } from '@nestjs/common';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('/')
  getAllQuestions() {
    return this.questionService.test();
  }
}
