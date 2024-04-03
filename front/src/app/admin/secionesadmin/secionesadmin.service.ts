import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecionesadminService {

  base = environment.URL;
  private baseUrl =  `${this.base}seccion`;

  constructor(private http: HttpClient) {}

  taer_seciones_estante(id:string){

    return this.http.get(`${this.baseUrl}?estante=${id}`)
  }
  crear(seccion:{}){
    console.log(seccion)
return this.http.post(`${this.baseUrl}`,{seccion}  )
  }

  editar(id:string,agregados:string[],eliminados:string[],nombre:{nombre:string}){

    const seccion = {
      nombre:nombre.nombre,
  id_seccion:id,
 
  agregados:agregados,
  eliminados:eliminados
    }

    return this.http.put(`${this.baseUrl}`,{seccion})

  }
  eliminar(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  // edicion de seccion
  
  traer_libros_no_a(){
    return this.http.get(`${this.baseUrl}/libros`)
  }
  traer_libros_asignados(id:string){
    return this.http.get(`${this.baseUrl}/${id}`)

  }



}
