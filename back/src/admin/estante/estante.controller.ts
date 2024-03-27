import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Estante } from '../interfaces/estante';
import { EstanteService } from './estante.service';

@Controller('estante')
export class EstanteController {
    constructor(private estanteS: EstanteService) { }
    @Get()
    trae_todos_l_estantes() {
        return this.estanteS.traer_todos()
    }
    @Get(':id')
    estante_by_id(@Param('id') id: string) {
        return this.estanteS.traer_by_id(id)
    }
    @Post()
    crea_estante(@Body('estante') estante: Estante) {
    
        return this.estanteS.crear_estante(estante)
    }
    @Put(':id')
    editar_estante(@Param('id') id:string, @Body('estante') estante: Estante) {
return this.estanteS.editar(id,estante)
    }


    @Delete(':id')
    eliminar_estante(@Param('id') id: string) {
        return this.estanteS.eliminar(id)

    }


}
