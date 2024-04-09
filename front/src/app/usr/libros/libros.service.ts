import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  base = environment.URL;
  private baseUrl =  `${this.base}buscador`;

  constructor(private http: HttpClient) {}

  traerResultados(buscar:string,pagina:number , seccion?:string): Observable<any> {
    if(!seccion){
    return this.http.get(`${this.baseUrl}?buscar=${buscar}&pagina=${pagina}`);}
     else{
      return this.http.get(`${this.baseUrl}?seccion=${seccion}&pagina=${pagina}`);
    }
  }
}
