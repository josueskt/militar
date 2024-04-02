import { Routes } from "@angular/router";
import { NotificacionesComponent } from "./notificaciones/notificaciones.component";
import { EstantesadminComponent } from "./estantesadmin/estantesadmin.component";
import { AdminComponent } from "./admin.component";
import { SecionesadminComponent } from "./secionesadmin/secionesadmin.component";
import { EditarSeccionComponent } from "./secionesadmin/editar-seccion/editar-seccion.component";

export const routesUsr: Routes = [

    {path:'admin',component:AdminComponent},
{path:'admin/notificaciones',component:NotificacionesComponent},
{path:'admin/estantes',component:EstantesadminComponent},
{path:'admin/secciones/:id',component:SecionesadminComponent},
{path:'admin/seccion/:id',component:EditarSeccionComponent}


]