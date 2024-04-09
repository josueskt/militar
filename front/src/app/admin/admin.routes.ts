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

export const routesUsr: Routes = [

    {path:'admin',component:AdminComponent},
{path:'admin/notificaciones',component:NotificacionesComponent},
{path:'admin/estantes',component:EstantesadminComponent},
{path:'admin/secciones/:id',component:SecionesadminComponent},
{path:'admin/seccion/:id',component:EditarSeccionComponent},
{path:'admin/libros',component:LibrosadminComponent},
{path:'admin/devoluciones',component:DevolucionesComponent},
{path:'admin/prestamo',component:PrestamosComponent},
{
    path:'admin/historial/:id',component:HistoriallibroComponent
}


]