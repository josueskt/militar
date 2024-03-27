import { Controller, Delete, Get, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
    constructor(private notificationS:NotificationService){}
@Get()
notificar(){
    return this.notificationS.notificaciones()
}
@Delete(':id')
eliminar_notificacion(@Param('id')id:string){

    return this.notificationS.eliminar_notf(id)
}

}
