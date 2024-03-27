import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
private buscar_S = inject(LibrosService)
private router=inject(Router)
libros:{"titulo":string,"id_libro":string}[]=[]
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const buscar = params['buscar'];
const seccion = params['seccion']
      this.buscar_S.traerResultados(buscar,seccion).subscribe(
        {next:(r)=>{
          console.log(r)

          this.libros = r
        },
      error:(e)=>{
        console.log(e)
      }}
      )
      // Aquí puedes realizar acciones basadas en el valor de 'buscar', como cargar datos de búsqueda, etc.
    });
  }

  libro(id_libro:string){
this.router.navigate([`libro/${id_libro}`])
  }

}
