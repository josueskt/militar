import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';
import { Prestamo } from '../interfaces/prestamo';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class NotificationService {
constructor(private sql:SqlService){}
async notificaciones(){
    
 await this.revisar_pendientes()

 return this.send_notifi()


}
async eliminar_notf(id:string){

this.sql.query('DELETE FROM  users.notificaciones WHERE id_notifi = $1',[id])

return new MessageDto("eliminado exitosamente")


}


private async revisar_pendientes(){

    

    const res = await this.sql.query('SELECT * from tramites.prestamo where fecha_entrega IS NULL')
    

    for await(const prestamo of res){

        this.verificacion_fecha(prestamo)
    }

    
//logica de generar notificacion con mensage notificaciones de los libros q ya estan pasados del prestamo en este caso segun la conf de la hora




}
 
private  async verificacion_fecha(prestamo) {
    const dt1: Date = new Date
const dt2: Date = new Date(prestamo.fecha_entrega);

const hora = dt2.getHours();



if(hora > 12 && prestamo.fk_estate === 1 ){
console.log(prestamo)

this.sql.query('INSERT INTO users.notificaciones(mensaje,id_libro)VALUES($1,$2)',['(alerta) prestamo caducado',prestamo.fk_libro])
this.sql.query('UPDATE tramites.prestamo SET fk_estate = 2 WHERE id_prestamo= $1',[prestamo.id_prestamo])
}
// Comparar los días
if (dt1.toISOString().slice(0, 10) !== dt2.toISOString().slice(0, 10)  && prestamo.fk_estate ===2) {

    this.sql.query('INSERT INTO users.notificaciones(mensaje,id_libro,id_prestamo)VALUES($1,$2,$3)',[`libro no devuelto${prestamo.fecha_prestamo} prestado por ${prestamo.fk_cliente}`,prestamo.fk_libro,prestamo.id_prestamo])


} 


}


private async send_notifi(){

    return this.sql.query('SELECT * FROM users.notificaciones')
}




}


