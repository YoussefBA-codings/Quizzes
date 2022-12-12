import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CreateQuizDto, UpdateQuizDto } from "../dto/quiz.dto";
import { QuizService } from "../services/quiz.service";

@Controller("quiz")
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get("/")
  getAllQuizzes() {
    return this.quizService.getAllQuizzes();
  }

  @Get("/:id")
  getQuizById(@Param() id: number) {
    return this.quizService.getQuizById(id);
  }

  @Post("/")
  @UsePipes(ValidationPipe)
  async addNewQuiz(@Body() body: CreateQuizDto) {
    return this.quizService.createQuiz(body);
  }

  @Patch("/:id")
  async updateQuiz(@Param() id: number, @Body() body: UpdateQuizDto) {
    return this.quizService.updateQuiz(id, body);
  }
}
