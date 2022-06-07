import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  libros!: Array<Libro>;
  libro!: Libro;
  indice: number = 0;

 

  constructor() {
    /*this.libros = [{id: 1, titulo: "Todo listo para la nueva temporada de la Superliga española del League of Legends", seccion: "Esta temporada está llena de grandes novedades y es que la liga ha dado un salto de calidad con las incorporaciones de nuevos equipos y un cambio importante en el formato de competición.",img: "noticia1.jpeg"},
    {id: 2, titulo: "El barcelona firma el primer patrocionio para la seccion de E-sports", seccion: "El club azulgrana junto a la empresa GMHE lanzarán una nueva plataforma de E-sports donde se organizarán competiciones de 'gaming' y ligas mundiales. ",img: "noticia2.jpeg"},
    {id: 3, titulo: "Arranca la eCopa RFEF con 4 eventos de alto nivel en FIFA22 de PS5", seccion: "La eCopa RFEF de este año presenta varias novedades, entre ellas que un grupo restringido de jugadores profesionales compiten previamente en una clasificatoria por parejas denominada Survival Series.",img: "noticia3.jpeg"},
    {id: 4, titulo: "El Mundial de E-Sports de ciclismo ya tiene fecha",seccion: "La competición estará centrada en los alrededores del Central Park neoyorkino en una visión de futuro dentro de 100 años, con carreteras de vidrio elevadas que llevan a los pasajeros a lo alto del icónico horizonte de Manhattan.",img:"noticia4.jpeg"}];
    */
    //this.iniciar();
   }

   iniciar(){
     if(this.indice < this.libros.length){
       this.libro = this.libros[this.indice];
     }
   }

   anterior(){
     if(this.indice>0){
      this.indice = this.indice - 1;
      if(this.indice < this.libros.length){
        this.libro = this.libros[this.indice];
      }
     }
   }

   siguiente(){
     if(this.indice<this.libros.length){
      this.indice = this.indice + 1;
      if(this.indice < this.libros.length){
        this.libro = this.libros[this.indice];
      }
     }
   }

  ngOnInit(): void {
  }

}
