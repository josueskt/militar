import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';
import { Estante } from '../interfaces/estante';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class EstanteService {
    constructor(private sql:SqlService){}
async traer_todos(){

    return  await this.sql.query('SELECT * FROM item.estante')
}
async traer_by_id(id:string){
    return  await this.sql.query('SELECT * FROM item.estante WHERE id_estante=$1',[id])

}
async  crear_estante(estante:Estante){
await this.sql.query('INSERT INTO item.estante(nombre)VALUES($1)',[estante.nombre])

return new MessageDto("estante creado exitosamente")


}
async eliminar(id:string){
await this.sql.query('DELETE FROM item.estante WHERE id_estante=$1',[id])
return new MessageDto("eliminado exitoso")

}
async editar(id:string,estante:Estante){
   
    await this.sql.query('UPDATE item.estante SET nombre =$1 WHERE id_estante =$2',[estante.nombre,id])
return new MessageDto("actualizado exitosamente")

}

}
