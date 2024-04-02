import { Component, OnInit, inject } from '@angular/core';
import { SecionesadminComponent } from '../secionesadmin.component';
import { SecionesadminService } from '../secionesadmin.service';

@Component({
  selector: 'app-editar-seccion',
  standalone: true,
  imports: [],
  templateUrl: './editar-seccion.component.html',
  styleUrl: './editar-seccion.component.css'
})
export class EditarSeccionComponent implements OnInit {
  libros_sin_asignar:{id_libro:string,codigo:string}[] = []
  libros_agregados:string[] = []  
  libros_eliminados:[] = []

private seccion_s = inject(SecionesadminService)
  ngOnInit(): void {
    this.trear_Libros()
  }
trear_Libros(){
 
  this.seccion_s.traer_libros_no_a().subscribe((e:any)=>{
    this.libros_sin_asignar = e
    console.log(e)
  })
}
estados: { [key: string]: string } = {};

cambiarEstado(id: string) {
  if (this.estados[id] === '-') {
    this.estados[id] = '+';
    let index = this.libros_agregados.indexOf(id);

     this.libros_agregados.splice(index, 1);
     console.log(this.libros_agregados)

    // Lógica para hacer algo cuando el estado es '-'
  } else {
    this.estados[id] = '-';
    this.libros_agregados.push(id)
    console.log(this.libros_agregados)
    // Lógica para hacer algo cuando el estado es '+'
  }
  // Lógica adicional según sea necesario
}


}
