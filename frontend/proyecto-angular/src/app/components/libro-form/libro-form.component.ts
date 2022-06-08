import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

  libro!: Libro;
  des!: string;
  destacados: Array<boolean> = [true,false];
  constructor(private libroService: LibrosService,
              private router: Router ) { 
    this.libro = new Libro();
  }

  ngOnInit(): void {
  }

  guardarLibro(){
    this.libroService.createLibro(this.libro).subscribe(result =>{
      this.router.navigate(['libro'])
      alert(result.msg);
    },
    error =>{
      alert(error.msg);
    }
    );
  }
}
