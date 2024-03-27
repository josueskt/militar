import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' git hub : https://github.com/josueskt';
  }
}
