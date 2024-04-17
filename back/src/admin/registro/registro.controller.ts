import { Body, Controller, Post } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { User } from '../interfaces/usuario';

@Controller('registro')
export class RegistroController {
constructor(private regis_S:RegistroService){

}
@Post()
registrar(@Body('user')usuario:User){
console.log(usuario)
 return this.regis_S.register(usuario)
}

}
