import { Controller, Delete, Get, Param, SetMetadata, UseGuards } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('notification')
export class NotificationController {
    constructor(private notificationS: NotificationService) { }
    @Get()
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    notificar() {
        return this.notificationS.notificaciones()
    }
    @Delete(':id')
    @UseGuards(RolesGuard)
    @SetMetadata('roles', ['biblioteca'])
    eliminar_notificacion(@Param('id') id: string) {

        return this.notificationS.eliminar_notf(id)
    }

}
