import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' creado por josue  git hub : https://github.com/josueskt';
  }
}
