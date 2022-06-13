import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  libros: Array<Libro> = [];
  libro!: Libro;
  indice: number = 0;

  imagen: string = "";
  descripcion: string = "";
  titulo: string= "";

 

  constructor(private libroService: LibrosService, private router: Router) {
    this.obtenerLibros();
  }
  iniciar(){
     if(this.indice < this.libros.length){
       this.libro = this.libros[this.indice];
       console.log(this.libro);
       this.imagen = this.libro.imagen;
       this.descripcion = this.libro.descripcion;
       this.titulo = this.libro.titulo;
     }
   }
   anterior(){
     if(this.indice>0){
      this.indice = this.indice - 1;
      if(this.indice < this.libros.length){
        this.libro = this.libros[this.indice];
        this.imagen = this.libro.imagen;
        this.descripcion = this.libro.descripcion;
        this.titulo = this.libro.titulo;
      }
     }
   }
   siguiente(){
     if(this.indice<this.libros.length){
      this.indice = this.indice + 1;
      if(this.indice < this.libros.length){
        this.libro = this.libros[this.indice];
        console.log(this.libro);
        this.imagen = this.libro.imagen;
        this.descripcion = this.libro.descripcion;
        this.titulo = this.libro.titulo;
      }
     }
   }
  obtenerLibros(){
    this.libroService.getLibros(true).subscribe((result) =>{
      this.libros = new Array<Libro>();
      result.forEach((element: any) => {
        this.libro = new Libro();
        Object.assign(this.libro,element);
        this.libros.push(this.libro);
      });
      this.iniciar();
    })
  }
  nuevoLibro(){
    this.router.navigate(['formulario'])
  }
  ngOnInit(): void {
  }

}
