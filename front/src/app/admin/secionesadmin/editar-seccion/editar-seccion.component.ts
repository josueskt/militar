import { Component, OnInit, inject } from '@angular/core';
import { SecionesadminComponent } from '../secionesadmin.component';
import { SecionesadminService } from '../secionesadmin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-seccion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-seccion.component.html',
  styleUrl: './editar-seccion.component.css'
})
export class EditarSeccionComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private fb = inject(FormBuilder)

  libros_sin_asignar:{id_libro:string,codigo:string}[] = []
  libros_asignados:{id_libro:string,codigo:string}[] = []
  seccion!:FormGroup


  libros_agregados:string[] = []  
  libros_eliminados:string[] = []
estados: { [key: string]: string } = {};


private seccion_s = inject(SecionesadminService)
id!:string
  ngOnInit(): void {
    this.seccion =  this.fb.group({nombre:[''],fk_estante:[this.id]})

    this.route.params.subscribe(params => {
      this.id = params['id'];
      
    });
    this.trear_Libros_sin_asignar()
    this.traer_libros_asignados(this.id)
  }

traer_libros_asignados(id_seccion:string){

    this.seccion_s.traer_libros_asignados(this.id).subscribe((e:any)=>{
this.libros_asignados = e

    })
  }
trear_Libros_sin_asignar(){
 
  this.seccion_s.traer_libros_no_a().subscribe((e:any)=>{
    this.libros_sin_asignar = e
    console.log(e)
  })
}

cambiarEstado_libros_agregados(id: string) {
  if (this.estados[id] === '-') {
    this.estados[id] = '+';
    let index = this.libros_agregados.indexOf(id);

     this.libros_agregados.splice(index, 1);
     console.log(this.libros_agregados)

  } else {
    this.estados[id] = '-';
    this.libros_agregados.push(id)
    console.log(this.libros_agregados)
  }
}
cambiarEstado_libros_elimanados(id: string) {
  if (this.estados[id] === '-') {
    this.estados[id] = '+';
    let index = this.libros_eliminados.indexOf(id);

     this.libros_eliminados.splice(index, 1);
     console.log(this.libros_eliminados)

  } else {
    this.estados[id] = '-';
    this.libros_eliminados.push(id)
    console.log(this.libros_eliminados)
    
  }
  
}



editar_secion(){
  this.seccion_s.editar(this.id,this.libros_agregados,this.libros_eliminados,this.seccion.value).subscribe((e:any)=>{alert(e.message[0])})

}


}
