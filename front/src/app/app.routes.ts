import { Routes } from '@angular/router';
import { HomeComponent } from './usr/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auts/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    { path: 'login', component: LoginComponent },

];
