import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { Estante } from '../interfaces/estante';
import { EstanteService } from './estante.service';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('estante')

export class EstanteController {
    constructor(private estanteS: EstanteService) { }
    @Get()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    trae_todos_l_estantes() {
        return this.estanteS.traer_todos()
    }
    @Get(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    estante_by_id(@Param('id') id: string) {
        return this.estanteS.traer_by_id(id)
    }
    @Post()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    crea_estante(@Body('estante') estante: Estante) {
    
        return this.estanteS.crear_estante(estante)
    }
    @Put(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    editar_estante(@Param('id') id:string, @Body('estante') estante: Estante) {
return this.estanteS.editar(id,estante)
    }


    @Delete(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    eliminar_estante(@Param('id') id: string) {
        return this.estanteS.eliminar(id)

    }


}
