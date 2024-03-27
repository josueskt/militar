import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { seccionService } from './seccion.service';

@Component({
  selector: 'app-seccion',
  standalone: true,
  imports: [],
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.css'
})
export class SeccionComponent implements OnInit{
id!:string
seccion!:{id_seccion:string,nombre:string}[]
private route = inject(ActivatedRoute)
private seccionS = inject(seccionService)
private router = inject(Router)

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.secciones_Traer(this.id)
    });
  }

  libros_seccion(id_seccion:string){

    this.router.navigate(['/libros'],{ queryParams: { seccion: id_seccion }});
  }
  secciones_Traer(id:string){
this.seccionS.traerSeciones(id).subscribe((e)=>{
  console.log(e)
  this.seccion = e
})
  }
}
