import { Component, Inject, inject } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auts/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  viewProviders: [],
  templateUrl: './login.component.html',

})
export class LoginComponent {
  username = '';
  password = '';
  showPassword: boolean = false;
  private aunt = inject(LoginService);
  private router = inject(Router);
  private authService = inject(AuthService);
  private toastrService: ToastrService = inject(ToastrService);

  ngOnInit() {
    // Obtener la información del usuario al inicializar el componente
    const userInfo = this.authService.getUserInfo();
    if (userInfo) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.aunt.login(this.username, this.password).subscribe({
     next: (response:any) => {
      
        // Maneja la respuesta del servidor aquí (por ejemplo, almacena el token)
        if (response.message) {
          // this.toastrService.error(response.response.message, 'Fail', {
          //   timeOut: 4000, positionClass: 'toast-top-center',
          // });
          alert(response.response.message)
        } else if (response.token) {
          localStorage.setItem('token', response.token);
          this.username = '';
          this.password = '';
          // Por ejemplo, navegar a la ruta '/otra-ruta'
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        } else {
          console.error('Respuesta del servidor inesperada:', response);
        }
      },
      error:(e: any) =>  console.error('Error en la autenticación:', e)
    }
    );
  }
  login_out() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
