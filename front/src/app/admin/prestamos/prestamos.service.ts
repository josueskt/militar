import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  base = environment.URL;
    private baseUrl =  `${this.base}prestamo`;
    private baseUrl2 =  `${this.base}clientes`;
  
    constructor(private http: HttpClient) {}

 prestamo(prestamo:{}){
 return this.http.post(`${this.baseUrl}`,{prestamo})
 }   
verificar_cliente(id:string){
  return this.http.get(`${this.baseUrl2}/${id}`)
}
crear_cliente(cliente:{}){


  return this.http.post(this.baseUrl2,{cliente})
}

buscador_libros_disponibles(buscador:string){
return this.http.get(`${this.baseUrl}/libros?libro=${buscador}`)

}
}
