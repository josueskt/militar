import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstantesService {
  base = environment.URL;
  private baseUrl =  `${this.base}buscador/estantes`;

  constructor(private http: HttpClient) {}

  traerEstantes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
