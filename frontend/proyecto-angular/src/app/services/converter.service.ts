import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private _http: HttpClient) { }

  public convertMoney(from: string, to: string, amount: number): Observable<any>{

    const httpOptions = {
      params : new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('amount', amount),
      
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6'
      })
    }

    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/convert',httpOptions)
  
  }

  public getCoverter(from_value: number, from_type: string, to_type: string): Observable<any>{
    const httpOptions = {
      params : new HttpParams({}).append("from-value",from_value).append("from-type",from_type)
      .set("to-type",to_type),
      

      headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }

    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",null,httpOptions)
  }

  //Lista de codigos de monedas
  public getListCodigos(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6'//CUENTA SECUNDARIA
      })
    }

    return this._http.get("https://currency-converter13.p.rapidapi.com/list",httpOptions)

  }

   //Convierte un moneda en otros 3 tipos de moneda USD a ARS,EUR,BTC
   public convertMoneyTable(from: string, to: string):Observable<any>{

    const httpOptions = {
      params : new HttpParams()
      .set('base', from)
      .set('currencies', to),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6'
      })
    }

    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/latest-rates',httpOptions)
  
  }

  public convertMoneyTable2(from: string, to: string):Observable<any>{

    const httpOptions = {
      params : new HttpParams()
      .set('base', from)
      .set('currencies', to),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com',
        'X-RapidAPI-Key': '73b25607c1msh11892e103645f02p17f7a9jsn304b654f98c6'
      })
    }

    return this._http.get('https://currency-converter-pro1.p.rapidapi.com/latest-rates',httpOptions)
  
  }

}
