import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConverterService } from 'src/app/services/converter.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  de!: string;
  a!: string;
  monto!: number;
  total!: number;


  codigos!: Array<any>;
  converterTable1!: any;
  converterTable2!: any;
  converterTable3!: any;
  converterTable4!: any;
  converterTable5!: any;
  converterTable6!: any;

  moneda!: Moneda;
  transaccion!: Transaccion;

  constructor(private converterService: ConverterService,
              private transaccionService: TransaccionService) {
    this.moneda = new Moneda();
    this.getLista();
    this.getConvertTable1();
    this.getConvertTable2();
    this.getConvertTable3();
    this.getConvertTable4();
    this.getConvertTable5();
    this.getConvertTable6();
  }

  

//METODO QUE HACE LA CONVERSION DE LA MONEDA
  converter(){
    this.converterService.convertMoney(this.moneda.from,this.moneda.to,this.moneda.amount).subscribe(
      (result) => {
        this.total = result.result;
        this.transaccion = new Transaccion();
        this.transaccion.monedaOrigen = this.moneda.from;
        this.transaccion.cantidadOrigen = this.moneda.amount;
        this.transaccion.monedaDestino = this.moneda.to;
        this.transaccion.cantidadDestino = this.total;
        this.transaccion.emailCliente = "ejemplo@gmail.com";
        this.transaccion.tasaConversion = this.moneda.amount;
        console.log(this.transaccion);
        this.transaccionService.createTransaccion(this.transaccion).subscribe(
          (result2) =>{
            alert(result2.msg)
          },
          error =>{
            alert(error.msg);
          }
          )
      })
  }

  //METODO QUE RETORNA LISTA DE CODIGOS DE MONEDAS DE LOS PAISES
  getLista(){
    this.converterService.getListCodigos().subscribe((result) =>{
      this.codigos = result;
      //console.log(result)
    })
  }

  //VALORES  PARA FILA 1
  getConvertTable1(){
    this.converterService.convertMoneyTable("USD","ARS,BTC,EUR").subscribe(
      (result1) => {

        this.converterTable1 = result1.result;
        //console.log(this.converterTable1)
        console.log("PRIMER LLAMADO");
        //console.log(this.converterTable1)
      })
  }

  //VALORES  PARA FILA 2
  getConvertTable2(){
    this.converterService.convertMoneyTable("GBP","ARS,BTC,EUR").subscribe(
      (result2) => {

        this.converterTable2 = result2.result;

      })
  }

  //VALORES  PARA FILA 3
  getConvertTable3(){
    this.converterService.convertMoneyTable("RUB","ARS,BTC,EUR").subscribe(
      (result3) => {

        this.converterTable3 = result3.result;

      })
  }

   //VALORES  PARA COLUMNA 1
  getConvertTable4(): void{
    this.converterService.convertMoneyTable2("ARS","USD,GBP,RUB").subscribe(
    (result4) => {

      this.converterTable4 = result4.result;
        
    })
  }

  //VALORES  PARA COLUMNA 2
  getConvertTable5(){
    this.converterService.convertMoneyTable2("BTC","USD,GBP,RUB").subscribe(
      (result5) => {

        this.converterTable5 = result5.result;

      })
  }

  //VALORES  PARA COLUMNA 3
  getConvertTable6(){
    this.converterService.convertMoneyTable2("EUR","USD,GBP,RUB").subscribe(
      (result6) => {

        this.converterTable6 = result6.result;
        
      })
  }

  ngOnInit(): void {
  }



}
