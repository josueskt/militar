import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../enviroments/enviroment";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class NotificacionesService{

    base = environment.URL;
    private baseUrl =  `${this.base}notification`;
  
    constructor(private http: HttpClient) {}
  
    traernotifi(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
    eliminar_notifi(id:string){
      return this.http.delete(`${this.baseUrl}/${id}`);

    }
}