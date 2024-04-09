import { Controller, Get, Param, Query } from '@nestjs/common';
import { BuscadorService } from './buscador.service';


@Controller('buscador')
export class BuscadorController {
    constructor(private buscador_S: BuscadorService) { }

    @Get()
    buscador(@Query('buscar') buscar: string, @Query('seccion') seccion: string, @Query('pagina') pagina: number) {
        
        return this.buscador_S.buscador(buscar, seccion, pagina)

    }
    @Get('/estantes')
    estantes() {
        return this.buscador_S.estantes()
    }

    @Get('seciones/:id')
    secciones(@Param('id') id_estante: string) {

        return this.buscador_S.secion(id_estante)

    }



}
