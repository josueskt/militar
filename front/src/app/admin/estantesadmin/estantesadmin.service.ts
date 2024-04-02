import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstantesadminService {
  base = environment.URL;
  private baseUrl =  `${this.base}estante`;

  constructor(private http: HttpClient) {}

traer_lista_es(){
  return this.http.get(`${this.baseUrl}`);

}
eliminar(estante_id:string){
  return this.http.delete(`${this.baseUrl}/${estante_id}`);

}
crear_estante(estante:{nombre:string}){
 return this.http.post(this.baseUrl,{estante})


}

}
