import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService  {

  base = environment.URL;
  private baseUrl =  `${this.base}prestamo`;
  constructor(private http:HttpClient) { }
  historial(id:string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
