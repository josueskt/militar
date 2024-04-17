import { Body, Controller, Delete, Get, Param, Post, Put, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { Seccion } from '../interfaces/seccion';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('seccion')
export class SeccionController {

    constructor(private seccionS: SeccionService) { }
    @Get('/libros')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    traer_libros_sin_usar(@Query('buscar')buscar:string) {
        return this.seccionS.l_s_u(buscar)

    }
    @Get()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    todas_seciones_estante(@Query('estante') id: string) {
        return this.seccionS.t_c_e(id)

    }
    @Get(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    traer_secion_y_libros(@Param('id') id: string) {
        return this.seccionS.l_s_l(id)
    }
    @Put()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    editar_seccion(@Body('seccion') seccion:{}) {


        return this.seccionS.editar(seccion)

        //editar lleva en el front  recive un array de libros a la seccion  y tambien recive un array de los libros eliminados de esa secion 
        //agregar aqui mismo uno para traer todos los libros q no estan  añadidos a una secion 
        // los libros eliminados tienes que volver a ser null en su kf_seccion 
    }
    @Delete(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    eliminar_secion(@Param('id')id:string) {

return this.seccionS.eliminar(id)        //toca ahcer un uodate a todos los libros y luego eliminarlo :3 

    }
    @Post()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    crear_secion(@Body('seccion') seccion: Seccion) {
    
        return this.seccionS.crear_seccion(seccion)
    }


}
