import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from '../interfaces/prestamo';


@Controller('prestamo')
export class PrestamoController {

    constructor(private prestamoS:PrestamoService){}
    @Get()
    traer_prestamo(@Query('codigo')codigo:string){
      return this.prestamoS.traer_Prestamos_disponibles(codigo)
    }
    @Get(':id')
    traer_historial_prestamo( @Param('id')id:string){

    return this.prestamoS.historial_prestamo(id)

    }
    @Post()
    crear_prestamo(@Body('prestamo')prestamo:Prestamo){

        return this.prestamoS.prestamo(prestamo)


    }
    @Put()
    entrega_prestamo(@Body('prestamo')prestamo:Prestamo){
    return this.prestamoS.entrega(prestamo)
    }
}