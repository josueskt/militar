import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialService } from './historial.service';

@Component({
  selector: 'app-historiallibro',
  standalone: true,
  imports: [],
  templateUrl: './historiallibro.component.html',
  styleUrl: './historiallibro.component.css'
})
export class HistoriallibroComponent implements OnInit {


  id!:string
  private route = inject(ActivatedRoute)
  private historial_S = inject(HistorialService)
  historial:{
observacion:string;cedula:string,direction:string,nombres:string,titulo:string,fecha_prestamo:string,telefono:string
}[] = []
 
   ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.id = params['id'];
      this.hitorial_T(this.id)
     });
   }

   hitorial_T(id:string){
this.historial_S.historial(id).subscribe((e:any)=>{
 this.historial = e
 console.log(this.historial)
})
   }

}
