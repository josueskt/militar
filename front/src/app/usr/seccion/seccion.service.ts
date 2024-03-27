import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class seccionService {
  base = environment.URL;
  private baseUrl =  `${this.base}buscador/seciones`;

  constructor(private http: HttpClient) {}

  traerSeciones(id:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
