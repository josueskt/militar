import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecionesadminService } from './secionesadmin.service';
import { secciones } from '../../interface/secciones.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-secionesadmin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './secionesadmin.component.html',
  styleUrl: './secionesadmin.component.css'
})
export class SecionesadminComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private secions_s = inject(SecionesadminService)
  private fb = inject(FormBuilder)

  seccion!:FormGroup
  id!:string
  secciones:secciones[] = []
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
    });
    this.seccion =  this.fb.group({nombre:[''],fk_estante:[this.id]})
      this.traer_seciones(this.id)
  }
  traer_seciones(id: string): void {
    this.secions_s.taer_seciones_estante(id).subscribe((r:any) => {
      this.secciones = r;
      console.log(r)
    });
  }
  crear(){
this.secions_s.crear(this.seccion.value).subscribe({
  next:(r:any)=>{alert(r.message[0])
     window.location.reload()},
  error:(e)=>{alert(e.message[0])}
})
  }
  elimiar(id:string){
    this.secions_s.eliminar(id).subscribe({
      next:(e:any)=>{
        window.location.reload()
        alert(e.message[0])
      },
      error:(e)=>{ alert(e.message[0])}
    })
  }

  }


