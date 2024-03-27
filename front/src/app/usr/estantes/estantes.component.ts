import { Component, OnInit, inject } from '@angular/core';
import { EstantesService } from './estantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estantes',
  standalone: true,
  imports: [],
  templateUrl: './estantes.component.html',
  styleUrl: './estantes.component.css'
})
export class EstantesComponent  implements OnInit{
  estantes_lista!:{nombre:string,id_estante:string}[]

  private estantesS = inject(EstantesService)
private router = inject(Router)
  ngOnInit(): void {

  this.estantes()
  }

  secion(id:string){
this.router.navigate([`seccion/${id}`])
  }

  estantes(){
    this.estantesS.traerEstantes().subscribe({
next:(r)=>{
  console.log(r)
  this.estantes_lista = r
}, error:(e)=>{
  console.log(e)
}

    })
  }


}
