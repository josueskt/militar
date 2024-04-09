import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cliente } from '../interfaces/clientes';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {

    constructor(private clientesS:ClientesService){}

@Get(':id')
cliente_by_id(@Param('id') id:string){

    return this.clientesS.traer_by_id(id)

}
@Post()
crear_cliente(@Body('cliente')cliente:Cliente){
   return this.clientesS.crear_cliente(cliente)



}



    
}
