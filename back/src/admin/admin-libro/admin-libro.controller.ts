import { Body, Controller, Delete, Get, Param, Post, Put, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { libro } from '../interfaces/libro';
import { AdminLibroService } from './admin-libro.service';
import { error } from 'console';
import { MessageDto } from 'src/commons/mmesage.dto';
import { RolesGuard } from 'src/roles/roles.guard';


@Controller('admin-libro')
export class AdminLibroController {
constructor(private libroS:AdminLibroService){}
@Get()
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
obtener_libros(@Query('pagina')pagina:number ,@Query('buscar')buscar:string){
return this.libroS.traer_todos(pagina,buscar)    
}
@Get('/historial/:id')
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
histroal_libros(@Param('id')id:string){
    return this.libroS.historial(id)
}
@Get(':id')
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
obtener_libro_id(@Param('id') id:string){
 return this.libroS.traer_por_id(id)
}
@Post()
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
 async crear_libro(@Body('libros') libros:libro[] ){

try{
  

     this.libroS.crear(libros)
       
    
    return new MessageDto("creado exitosamente");
}catch{
    return error
}
    

}
@Put(':id')
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
editar_libro(@Param('id') id:string ,@Body('libro')libro:libro){
    
   // return this.libroS.editar(id,libro)
    
}
@Delete(':id')
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
eliminar(@Param('id')id:string){

    return this.libroS.eliminar(id)
}




}
