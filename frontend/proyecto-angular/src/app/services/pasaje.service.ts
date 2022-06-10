import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase = "http://localhost:3000/api/"

  constructor(private _http: HttpClient) { }

  createPasaje(pasaje: Pasaje): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    const body = JSON.stringify(pasaje);
    return this._http.post(this.urlBase+"pasaje",body,httpOptions)
  }
  
  getPasaje(_id: string): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlBase+"pasaje/"+_id,httpOptions);
  }

  getPasajes(): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({

      }),
      paras: new HttpParams({
        
      })
    }
    return this._http.get(this.urlBase+"pasaje",httpOptions);
  }

  delatePasaje(_id: string): Observable<any>{
    const params = new HttpParams()
    .set("_id",_id)
    const headers = new HttpHeaders()
    const httpOptions = {params: params,headers: headers}
    
    return this._http.delete(this.urlBase+"pasaje/"+_id,httpOptions)
  }

  updatePasaje(_id: string ,pasaje: Pasaje){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    const body = JSON.stringify(pasaje);
    return this._http.put(this.urlBase+"pasaje/"+_id,body,httpOptions);
  }

  getPasajesFiltro(categoriaPasajero: string): Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders(),
      params : new HttpParams().set("categoriaPasajero",categoriaPasajero)
    }
    return this._http.get(this.urlBase+"pasaje/categoria/"+categoriaPasajero,httpOptions)
  }

}
