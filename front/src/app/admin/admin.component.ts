import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../auts/auth.service';
import { NotificacionesService } from './notificaciones/notificaciones.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  private auth = inject(AuthService)
private notifi = inject(NotificacionesService)
usuario:any
  async cerrar() {
  await this.notifi.traernotifi().subscribe((e) => {
    if (!e.length) { 
      this.auth.clearToken();
      window.location.href = "./login";

    } else {
      alert('notificaciones pedientes')
      window.location.href = "../admin/notificaciones";
    }
  });
}

  ngOnInit(): void {
    
    this.usuario = this.auth.getUserInfo()
    console.log(this.usuario)
  }


}
