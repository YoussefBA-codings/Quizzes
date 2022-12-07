import { Injectable } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

@Injectable()
export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
