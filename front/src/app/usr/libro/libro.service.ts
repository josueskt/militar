import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  base = environment.URL;
  private baseUrl =  `${this.base}usr/libros`;

  constructor(private http: HttpClient) {}

  traerLibro(id:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
