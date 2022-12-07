import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  returnString(): string {
    return 'This is my first Nest service';
  }
}
