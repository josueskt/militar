import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NotificationController } from './admin/notification/notification.controller';
import { LibrosController } from './usr/libros/libros.controller';
import { BuscadorController } from './usr/buscador/buscador.controller';
import { BuscadorService } from './usr/buscador/buscador.service';
import { ClientesController } from './admin/clientes/clientes.controller';
import { AdminLibroController } from './admin/admin-libro/admin-libro.controller';
import { PrestamoController } from './admin/prestamo/prestamo.controller';
import { SqlService } from './sql/sql.service';
import { LibrosService } from './usr/libros/libros.service';
import { EstanteController } from './admin/estante/estante.controller';
import { SeccionController } from './admin/seccion/seccion.controller';
import { AdminLibroService } from './admin/admin-libro/admin-libro.service';
import { ClientesService } from './admin/clientes/clientes.service';
import { PrestamoService } from './admin/prestamo/prestamo.service';
import { EstanteService } from './admin/estante/estante.service';
import { NotificationService } from './admin/notification/notification.service';
import { SeccionService } from './admin/seccion/seccion.service';
import { LoginController } from './admin/login/login.controller';
import { LoginService } from './admin/login/login.service';
import { RegistroController } from './admin/registro/registro.controller';
import { RegistroService } from './admin/registro/registro.service';


@Module({
  imports: [],
  controllers: [AppController, LoginController, LibrosController, PrestamoController, ClientesController, NotificationController, LibrosController, BuscadorController, ClientesController, AdminLibroController, EstanteController, SeccionController, RegistroController],
  providers: [AppService,  LibrosService, LoginService,  BuscadorService, SqlService, AdminLibroService, ClientesService, PrestamoService, EstanteService, NotificationService, SeccionService, RegistroService],
})
export class AppModule {}
