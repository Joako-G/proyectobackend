import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  createTransaccion(transaccion: Transaccion): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    const body = JSON.stringify(transaccion)
    return this._http.post(this.urlBase+"transaccion/",body,httpOptions);
  }

  getTransacciones(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }

    return this._http.get(this.urlBase+"transaccion",httpOptions)
  }

  getTransaccionesFiltro(monedaOrigen: string, monedaDestino: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
      .set("monedaOrigen",monedaOrigen)
      .set("monedaDestino",monedaDestino),
    }

    return this._http.get(`${this.urlBase}transaccion/${monedaOrigen}&${monedaDestino}`,httpOptions)
  }

}
