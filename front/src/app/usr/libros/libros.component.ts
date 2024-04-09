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
pagina:number =1
 buscar:string = ''
 seccion:string =''
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       this.buscar = params['buscar'];
      this.seccion = params['seccion']
   this.resusltados(this.buscar,this.pagina,this.seccion)
      // Aquí puedes realizar acciones basadas en el valor de 'buscar', como cargar datos de búsqueda, etc.
    });
  }

resusltados(buscar:string,pagina:number,seccion:string){

  this.buscar_S.traerResultados(buscar,pagina,seccion).subscribe(
    {next:(r)=>{
     

      this.libros = r
     
    },
  error:(e)=>{
    console.log(e)
  }}
  )

}


  siguiente = () => {
    this.pagina += 1;

    this.resusltados(this.buscar,this.pagina,this.seccion)
  }
  atras = () => {
    if (this.pagina > 1) {
      this.pagina -= 1;
    this.resusltados(this.buscar,this.pagina,this.seccion)
      
    }
  }


  libro(id_libro:string){
this.router.navigate([`libro/${id_libro}`])
  }

}
