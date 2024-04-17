import { Routes } from "@angular/router";
import { NotificacionesComponent } from "./notificaciones/notificaciones.component";
import { EstantesadminComponent } from "./estantesadmin/estantesadmin.component";
import { AdminComponent } from "./admin.component";
import { SecionesadminComponent } from "./secionesadmin/secionesadmin.component";
import { EditarSeccionComponent } from "./secionesadmin/editar-seccion/editar-seccion.component";
import { LibrosadminComponent } from "./librosadmin/librosadmin.component";
import { DevolucionesComponent } from "./devoluciones/devoluciones.component";
import { PrestamosComponent } from "./prestamos/prestamos.component";
import { HistoriallibroComponent } from "./historiallibro/historiallibro.component";
import { AuthGuard } from "../auts/auth.guard";

export const routesUsr: Routes = [

    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] },
    },
    {
        path: 'admin/notificaciones', component: NotificacionesComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    {
        path: 'admin/estantes', component: EstantesadminComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    {
        path: 'admin/secciones/:id', component: SecionesadminComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    {
        path: 'admin/seccion/:id', component: EditarSeccionComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    { path: 'admin/libros', component: LibrosadminComponent },
    {
        path: 'admin/devoluciones', component: DevolucionesComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    {
        path: 'admin/prestamo', component: PrestamosComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    },
    {
        path: 'admin/historial/:id', component: HistoriallibroComponent, canActivate: [AuthGuard],
        data: { roles: ['biblioteca'] }
    }


]