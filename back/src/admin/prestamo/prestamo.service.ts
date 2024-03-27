import { Injectable } from '@nestjs/common';
import { Prestamo } from '../interfaces/prestamo';
import { SqlService } from 'src/sql/sql.service';
import { error } from 'console';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class PrestamoService {

   constructor(private sql:SqlService){} 
traer_Prestamos_disponibles(busqueda:string){
    return this.sql.query('SELECT p.id_prestamo ,c.nombres ,c.cedula, b.titulo ,b.id_libro FROM tramites.prestamo as p LEFT JOIN  users.clientes  as c ON p.fk_cliente = c.cedula  LEFT JOIN item.book as b ON p.fk_libro = b.id_libro WHERE LOWER(b.codigo) LIKE LOWER($1) AND p.fk_estate !=3 ', [`%${busqueda}%`]);

}    

//logica de prestamo
 async prestamo(prestamo:Prestamo){

    

 try{

    const res = await this.sql.query('select cantidad from item.book where id_libro = $1',[prestamo.fk_libro])

    if(res[0].cantidad > 0){
        
        
        const valor = res[0].cantidad -1
        
await this.sql.query('UPDATE item.book SET cantidad =$1 WHERE id_libro = $2',[valor,prestamo.fk_libro])
console.log(prestamo)
await this.sql.query('INSERT INTO tramites.prestamo(fecha_prestamo,fk_cliente,fk_libro,fk_estate)VALUES (CURRENT_TIMESTAMP,$1,$2,$3)',[prestamo.fk_cliente,prestamo.fk_libro,1])


    return new MessageDto("prestamo exitoso")

    }
    else{ return new MessageDto("lo sentimos no se pudo prestar")}
 }catch{return error}

   



}


 async entrega(prestamo:Prestamo){

    try{

        const res = await this.sql.query('select cantidad from item.book where id_libro = $1',[prestamo.fk_libro])
    
        const re2 = await this.sql.query('select * FROM tramites.prestamo where id_prestamo = $1 and fk_estate !=3',[prestamo.id_prestamo])
        
            console.log(re2[0])
            
            const valor = res[0].cantidad +1
    if(re2[0]){

           
            
    await this.sql.query('UPDATE item.book SET cantidad =$1 WHERE id_libro = $2',[valor,prestamo.fk_libro])
   
    await this.sql.query('UPDATE tramites.prestamo SET observacion = $1 ,fecha_entrega = CURRENT_TIMESTAMP , fk_estate = $2 where id_prestamo = $3 ',[prestamo.observacion,3,prestamo.id_prestamo])
    
    
        return new MessageDto("devolicion exitosa exitoso")
    
    }else{
        return new MessageDto("libro ya devueto o sin tramite de prestamo pendienteo activo")

    }

     }catch(error){return error}
    
   


}


async historial_prestamo(id:string){

return  await this.sql.query('SELECT b.titulo, p.fecha_prestamo,p.observacion,c.cedula ,c.nombres , c.direction,c.telefono FROM item.book as b LEFT JOIN tramites.prestamo as p ON b.id_libro =p.fk_libro LEFT JOIN users.clientes as c ON  p.fk_cliente = c.cedula where b.codigo =$1',[id] )

}
}
