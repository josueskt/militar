import { Body, Controller, Get, Param, Post, Put, Query, SetMetadata, UseGuards } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from '../interfaces/prestamo';
import { RolesGuard } from 'src/roles/roles.guard';


@Controller('prestamo')
export class PrestamoController {

  constructor(private prestamoS: PrestamoService) { }
  @Get()
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['biblioteca'])
  traer_prestamo_realizados(@Query('codigo') codigo: string) {
    return this.prestamoS.traer_devolucion_disponibles(codigo)
  }
  @Get('/libros')
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['biblioteca'])
  libros_disponibles(@Query('libro') libro: string) {
    return this.prestamoS.libros_disponibles(libro)
  }
  @Get(':id')
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['biblioteca'])
  traer_historial_prestamo(@Param('id') id: string) {

    return this.prestamoS.historial_prestamo(id)

  }
  @Post()
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['biblioteca'])
  crear_prestamo(@Body('prestamo') prestamo: Prestamo) {
    return this.prestamoS.prestamo(prestamo)


  }
  @Put()
  @UseGuards(RolesGuard)
  @SetMetadata('roles', ['biblioteca'])
  entrega_prestamo(@Body('prestamo') prestamo: Prestamo) {
    return this.prestamoS.entrega(prestamo)
  }
}
