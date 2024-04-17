import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../auts/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  private auth = inject(AuthService)

usuario:any
  cerrar(){
    this.auth.clearToken()
  }
  ngOnInit(): void {
    
    this.usuario = this.auth.getUserInfo()
    console.log(this.usuario)
  }


}
