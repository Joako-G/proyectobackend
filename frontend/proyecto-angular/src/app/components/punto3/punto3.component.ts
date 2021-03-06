import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  pasajes!: Array<Pasaje>;
  categorias: Array<string> = ['Menor','Adulto','Jubilado'];
  categoria!:string;
  filtro: boolean = false;

  constructor(private pasajeService: PasajeService,
              private personaService: PersonaService,
              private router: Router) {
              this.obtenerPasajes();
  }

  ngOnInit(): void {
  }

  obtenerPasajes(){
    this.pasajeService.getPasajes().subscribe(
      (result) =>{
        this.pasajes = new Array<Pasaje>();
        this.pasajes = result;
      },
      error => {
        alert(error.msg);
      }
    )
  }

  nuevoPasaje(){
    this.router.navigate(['formularioP', 0]);
  }

  editarPasaje(pasaje: Pasaje){
    this.router.navigate(['formularioP', pasaje._id])
  }

  eliminarPasaje(pasaje: Pasaje){
    this.pasajeService.delatePasaje(pasaje._id).subscribe(
      (result) => {
        alert(result.msg);
        location.reload();
      },
      error => {
        alert(error.msg);
      }
    )
  }

  obtenerPasajeFiltro(){
    this.pasajeService.getPasajesFiltro(this.categoria).subscribe(
      (result) => {
        this.pasajes = new Array<Pasaje>();
        this.pasajes = result;
        this.filtro = false;
        this.categoria = "";
      },
      error => {
        alert(error.msg);
      }
    )
  }

  onChange(categoria: string){
    if(categoria != ""){
      this.filtro = true;
    }else{
      this.filtro = false;
    }
  }

}
