import { CreateQuizDto } from 'src/dto/quiz.dto';
import { QuizService } from 'src/services/quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuizzes(): (string | number)[];
    addNewQuiz(body: CreateQuizDto): CreateQuizDto;
}
