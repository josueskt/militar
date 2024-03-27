import { Injectable } from '@nestjs/common';
import { libro } from '../interfaces/libro';
import { SqlService } from 'src/sql/sql.service';
import { error } from 'console';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class AdminLibroService {

    constructor(private sql:SqlService){}

    async historial(id:string){
      return this.sql.query('SELECT p.id_prestamo, p.fecha_prestamo,p.fecha_entrega,p.observacion ,c.cedula,c.telefono,e.nombre as estado FROM tramites.prestamo as p  INNER JOIN users.clientes as c ON p.fk_cliente = c.cedula LEFT JOIN  tramites.estate as e  ON p.fk_estate =e.id_estate WHERE p.fk_libro = $1',[id])
    }
 async traer_todos(){

   


    const result = await this.sql.query(
        'select * from item.book order by id_libro '
      );

      return result
}
async traer_por_id(id:string){
try{
   const res = await this.sql.query('SELECT * from item.book WHERE  id_libro = $1',[id])
    return res
}catch{return error}
    

}
async eliminar(id:string){
 try{
   await this.sql.query('DELETE FROM item.book WHERE  id_libro = $1',[id])
   return new MessageDto('eliminado correctamente')
 }catch{ return error}
   

}

 async crear(libro:libro){



 try{

    await this.sql.query(
        `INSERT INTO item.book(
            titulo,
            year_of_publ,
            isbn,
            codigo,
            cantidad,
            fk_type,
            fk_seccion,
            fk_categoria)VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
            [libro.titulo,libro.year_of_publ,libro.isbn,libro.codigo,libro.cantidad,libro.fk_type,libro.fk_seccion,libro.fk_categoria]
      );

    return "creado exitosamente"
 }catch{
    return error
 }
    
}

async editar(id:string ,libro:libro){

   try{
      await this.sql.query(`UPDATE item.book set  
      titulo =$1,
      year_of_publ=$2,
      isbn=$3,
      codigo=$4,
      cantidad=$5,
      fk_type=$6,
      fk_seccion=$7,
      fk_categoria=$8 
      Where id_libro =$9`,
      [libro.titulo,libro.year_of_publ,libro.isbn,libro.codigo,libro.cantidad,libro.fk_type,libro.fk_seccion,libro.fk_categoria,id]
      )

      return  new MessageDto("editado exitosamente");
   }catch{
      return error
   }
  

}
}

