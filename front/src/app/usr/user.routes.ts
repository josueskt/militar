import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { EstantesComponent } from './estantes/estantes.component';
import { SeccionComponent } from './seccion/seccion.component';

export const routesUsr: Routes = [
    { path: 'home', component: HomeComponent},
{path:'libros',component:LibrosComponent},
{path:'libro/:id',component:LibroComponent},
{path:'estantes',component:EstantesComponent},
{path:'seccion/:id',component:SeccionComponent}

];
