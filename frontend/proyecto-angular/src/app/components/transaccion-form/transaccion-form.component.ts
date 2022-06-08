import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit {

  transaccion!: Transaccion;
  transacciones!: Array<Transaccion>;

  monedaOrigen!: string;
  monedaDestino!: string;
  filtro1: boolean = false;
  filtro2: boolean = false;

  constructor(private transaccionService: TransaccionService) {
    //this.obtenerTransaccionesFiltro();
  }

  ngOnInit(): void {
  }

  obtenerTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      (result) => {
        this.transacciones = new Array<Transaccion>();
        this.transacciones = result
        console.log(result);
      }
    )
  }

  obtenerTransaccionesFiltro(){
    //console.log(this.monedaDestino);
    this.transaccionService.getTransaccionesFiltro(this.monedaOrigen,this.monedaDestino).subscribe(
      (result) => {
        this.transacciones = new Array<Transaccion>();
        this.transacciones = result;
        console.log(result);
      }
    )
    this.monedaOrigen = "";
    this.monedaDestino = "";
    this.filtro1 = false;
    this.filtro2 = false;
  }

  onChange(monedaOrigen: string){
    if(monedaOrigen!=""){
      this.filtro1 = true;
    }else{
      this.filtro1 = false;
    }

  }
  onChange2(monedaDestino: string){
    if(monedaDestino!=""){
      this.filtro2 = true;
    }else{
      this.filtro2 = false;
    }

  }
}
