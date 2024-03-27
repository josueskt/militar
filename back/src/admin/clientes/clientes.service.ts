import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';
import { Cliente } from '../interfaces/clientes';
import { error } from 'console';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class ClientesService {

constructor(private sql:SqlService){}

 async traer_by_id(id:string){

const res = await this.sql.query('SELECT * from users.clientes Where cedula=$1',[id])

return res

 }

 async crear_cliente(cliente:Cliente){

try{

    await this.sql.query(`INSERT INTO users.clientes(cedula,nombres,email,direction,calle_principal,calle_secundaria,numero_casa,telefono) values($1,$2,$3,$4,$5,$6,$7,$8)`,[cliente.cedula,cliente.nombres,cliente.email,cliente.direction,cliente.calle_principal,cliente.calle_secundaria,cliente.numero_casa,cliente.telefono])

    return new MessageDto("creado exitosamente");
}catch{
    return error
}

 }


}
