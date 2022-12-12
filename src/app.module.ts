import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/orm.config';
import { QuestionsModule } from './modules/question/question.module';
import { QuizModule } from './modules/quiz/quiz.module';
import 'reflect-metadata';


@Module({
  imports: [QuestionsModule, QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
