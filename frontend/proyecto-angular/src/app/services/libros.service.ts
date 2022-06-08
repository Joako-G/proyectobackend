import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  getLibros(destacado: boolean): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      }).append("destacado",destacado)
      //params : new HttpParams().set("destacado",destacado)
    };
    //const url = "libro/"+destacado;
    return this._http.get(this.urlBase+"libro/"+destacado,httpOptions);
  }
  //titulo: string,descripcion: string,imagen: string,stock: number,destacado: boolean
  createLibro(libro: Libro): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    const body = JSON.stringify(libro);
    return this._http.post(this.urlBase+"libro/",body,httpOptions);
  }
  //imagenes 480*480 480*680
}
