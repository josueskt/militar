import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auts/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  buscador!: FormGroup;

  private fb = inject(FormBuilder)
  private router =inject(Router)
 

  ngOnInit(): void {
    this.buscador =  this.fb.group({buscar:['']})
    
  }

  buscar(){
    console.log(this.buscador.value)
    this.router.navigate(['/libros'],{ queryParams: { buscar: this.buscador.value.buscar }});
  }



}
