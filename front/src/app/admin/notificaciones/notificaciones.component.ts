import { Component, OnInit, inject } from '@angular/core';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent implements OnInit {
  private notificacion_S = inject(NotificacionesService)
  notificaciones!:{mensaje:string,codigo:string,id_notifi:string}[]

ngOnInit(): void {
  
this.notificar()
}

notificar(){
  this.notificacion_S.traernotifi().subscribe((e)=>{
    this.notificaciones = e
    console.log(this.notificaciones)
  })
}
eliminar(id:string){

  this.notificacion_S.eliminar_notifi(id).subscribe((e:any)=>{
    alert(e.message[0])
    window.location.reload()
  })
}

}
