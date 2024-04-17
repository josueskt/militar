import { Body, Controller, Post } from '@nestjs/common';

import { LoginService } from './login.service';
import { login } from './login.dto';

@Controller('login')
export class LoginController {
  constructor(private Login: LoginService) {}

  @Post()
  
  login(@Body('user') datos: login) {
    return this.Login.Login(datos);
  }
}
