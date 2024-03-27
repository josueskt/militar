import { Controller, Get, Param } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller('usr/libros')
export class LibrosController {
constructor(private libro_S:LibrosService){}
@Get(':id')
librs(@Param('id')id:string){

return this.libro_S.libro(id)

}


}
