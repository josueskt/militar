import { Injectable } from '@nestjs/common';
import { MessageDto } from 'src/commons/mmesage.dto';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class SeccionService {
    constructor(private sql:SqlService){}

    async crear_seccion(seccion){
try{
        this.sql.query('INSERT INTO item.seccion(nombre,fk_estante) VALUES($1,$2)',[seccion.nombre,seccion.fk_estante])
        
        return new MessageDto("creado exitosamente")

    }catch(error){ return new MessageDto(error)
}
    }
    

async l_s_u(buscar:string){

    return await this.sql.query('SELECT id_libro,codigo FROM item.book WHERE codigo LIKE $1 AND fk_seccion IS NULL LIMIT 30',[`%${buscar}%`])
}
async t_c_e(id:string){
    return await this.sql.query('SELECT * FROM item.seccion where fk_estante = $1',[id])
}
async l_s_l(id:string){

    return await this.sql.query('SELECT codigo , id_libro FROM item.book WHERE fk_seccion = $1',[id])
}

async editar(seccion){

seccion.nombre
seccion.id_seccion
if(seccion.nombre){

    this.sql.query('UPDATE item.seccion SET nombre =$1 WHERE id_seccion = $3',[seccion.nombre,seccion.id_seccion])
}
if(seccion.eliminados){
  await  this.elm_l(seccion.eliminados)
}
if(seccion.agregados){
await this.c_l_S(seccion.agregados,seccion.id_seccion)
}


return new MessageDto("actualizado exitosamente")

}

async elm_l(seccion:string[]){
    

    for(const eliminados of seccion){

        
  await  this.sql.query('UPDATE item.book SET fk_seccion= NULL WHERE id_libro =$1',[eliminados])
       
       
    
    }


}
async c_l_S(agregados:string[],id:string){


for(const agregado of agregados){

   
  await  this.sql.query('UPDATE item.book SET fk_seccion=$1 WHERE id_libro =$2',[id,agregado])
   

}

}
async eliminar(id){
  await  this.sql.query('UPDATE item.book SET fk_seccion= NULL WHERE fk_seccion =$1',[id])

   await this.sql.query('DELETE FROM item.seccion where id_seccion = $1',[id])

    return new MessageDto("eliminado exitosamente")

}

}
