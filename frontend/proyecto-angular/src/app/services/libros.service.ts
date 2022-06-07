import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlBase: string = "http://localhost:300/api/";

  constructor(private _http: HttpClient) { }

  getLibros(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params : new HttpParams({

      })
    };

    
    return this._http.get(this.urlBase+"libro",httpOptions);
  }

}
