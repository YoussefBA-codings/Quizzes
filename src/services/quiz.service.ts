import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  @Get('/')
  getAllQuizzes() {
    return [1, 2, 3, 'from the quiz service'];
  }
}
