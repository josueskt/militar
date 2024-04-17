import { Body, Controller, Get, Param, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { Cliente } from '../interfaces/clientes';
import { ClientesService } from './clientes.service';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('clientes')

export class ClientesController {

    constructor(private clientesS:ClientesService){}

@Get(':id')
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
cliente_by_id(@Param('id') id:string){

    return this.clientesS.traer_by_id(id)

}
@Post()
@UseGuards(RolesGuard)
@SetMetadata('roles', ['biblioteca'])
crear_cliente(@Body('cliente')cliente:Cliente){
   return this.clientesS.crear_cliente(cliente)



}



    
}
