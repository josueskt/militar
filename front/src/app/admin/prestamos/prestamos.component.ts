import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrestamosService } from './prestamos.service';
import { libro } from '../../interface/libro.interface';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  private prestamo_S = inject(PrestamosService)
  private fb = inject(FormBuilder)
  nuevo_cliente!:FormGroup
  buscador:string=''
  libros:libro[] =[] 

  cliente:{cedula:string,nombres:string}={cedula:'',nombres:''}
  cliente_valido:boolean = true
  fk_libro_a_prestar = '' 
  cedula = ''
  showModal: boolean =false;

  ngOnInit(): void {
    this.nuevo_cliente =  this.nuevo_cliente = this.fb.group({
      nombres: ['', Validators.required],
      cedula: ['', Validators.required],
      email: ['', Validators.required],
      direcion: [''],
      calle_principal: [''],
      calle_secundaria: [''],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$")]] // Validador de patrón para aceptar solo números
    });
  }

  crear_cliente(){
   
    this.prestamo_S.crear_cliente(this.nuevo_cliente.value).subscribe({
      next:(e:any)=>{
        
       
      this.cedula =  this.nuevo_cliente.value.cedula
        this.validar_Cliente()
        alert(e.message[0])

        
      },
      error:(e:any)=>{
        alert(e.message[0])
      },
    })
  }
validar_Cliente(){
 
  this.prestamo_S.verificar_cliente(this.cedula).subscribe({
next:(r:any)=>{
 
 
  if(r && r.length > 0 && r[0].cedula){

    this.cliente = r[0]
    
   

      this.cliente_valido=true
    
  }
  else{
    this.cliente_valido = false
  }
},error:(e)=>{
  alert(e)
}


  })
}

buscar(){
  if(this.buscador){

    this.prestamo_S.buscador_libros_disponibles(this.buscador).subscribe({
      next:(r:any)=>{ console.log(r)

         this.libros = r
      },error:(e:any)=>{}
    })
  }

}


closeModal(){

  this.showModal = false
}
openModal(fk_libro:string){
  if(fk_libro){
    this.fk_libro_a_prestar = fk_libro
  }
  this.showModal = true
 
}

prestar(){
  console.log(this.cedula+'asdasds'+this.fk_libro_a_prestar)
  if(this.cedula && this.fk_libro_a_prestar){
this.prestamo_S.prestamo({fk_libro:this.fk_libro_a_prestar,
fk_cliente:this.cedula,}).subscribe({
  next:(e:any)=>{
    alert(e.message[0])
  },error:(e)=>{
    alert(e.message[0])
    
  }
})
  }
}
}
