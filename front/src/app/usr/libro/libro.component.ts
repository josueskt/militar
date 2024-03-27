import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from './libro.service';
import { libro } from '../../interface/libro.interface';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent implements OnInit {
  id!: string;
libro!:libro
private route = inject(ActivatedRoute)
private libroS = inject(LibroService)

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = params['id'];
    this.obtener_libro(this.id)
  });
   
 }
 obtener_libro(id:string){
   this.libroS.traerLibro(id).subscribe({next:(r)=>{
this.libro = r[0]
console.log(this.libro)
   }})
 }

}
