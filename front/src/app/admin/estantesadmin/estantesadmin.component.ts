import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EstantesadminService } from './estantesadmin.service';
import QRCode from 'qrcode';
@Component({
  selector: 'app-estantesadmin',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './estantesadmin.component.html',
  styleUrl: './estantesadmin.component.css'
})
export class EstantesadminComponent implements OnInit {
private estante_S = inject(EstantesadminService)
estante!:FormGroup
lista_estante!:{nombre:string,id_estante:string}[]
private fb = inject(FormBuilder)
url = window.location.origin + '/';




enlace: string = this.url;

  qrCodeUrl: string = '';


  async generateQRCode(id:string) {
    try {
      this.qrCodeUrl = await QRCode.toDataURL(`${this.enlace}seccion/${id}`);
    } catch (err) {
      console.error('Error generando código QR:', err);
    }
  }

  ngOnInit(): void {
    this.estante =  this.fb.group({nombre:['']})
    
    this.traer_seciones()
  }
  
  traer_seciones(){
    this.estante_S.traer_lista_es().subscribe((e:any)=>{
      this.lista_estante = e
      console.log(this.lista_estante)
    })
  }
eliminar_estante(id_estante:string){
  this.estante_S.eliminar(id_estante).subscribe({next:(e:any)=>{
    alert(e.message[0])
    window.location.reload()

  },error:(e)=>{
    alert(e.message[0])

  }})
}
  crear( ){
    return this.estante_S.crear_estante(this.estante.value).subscribe((r:any)=>{
      window.location.reload()

    alert(r.message[0])
    })
  }

}
