import { Injectable } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';


@Injectable()
export class AddQuestionDto {
  @IsNotEmpty({ message: 'question filed is required' })
    question: string;
  
  @IsNotEmpty({ message: 'quizId filed is required' })
    quizId: number;
}