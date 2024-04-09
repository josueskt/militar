import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DevolucionesService {

  base = environment.URL;
  private baseUrl =  `${this.base}prestamo`;
  constructor(private http:HttpClient) { }

  obtener_codigo_de_Devolucion(cadena:string){
return this.http.get(`${this.baseUrl}?codigo=${cadena}`)
  }
  devolver_prestamo(prestamo:{}){
    return this.http.put(this.baseUrl,{prestamo})
  }

}
