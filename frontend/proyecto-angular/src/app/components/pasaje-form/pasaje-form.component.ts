import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {

  personas!: Array<Persona>;
  pasaje!: Pasaje;
  persona!: Persona;
  categorias: Array<string> = ['Menor','Adulto','Jubilado'];
  categoriaEmpty: boolean = false;
  precioEmpty: boolean = false;
  descuento!: number;
  accion: string = "new";

  constructor(private personaService: PersonaService,
              private pasajeService: PasajeService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
                this.pasaje = new Pasaje();
                this.persona = new Persona();

  }

  ngOnInit(): void {
    this.listaPersona();
    this.activatedRouter.params.subscribe(params=> {
      if(params['id'] == "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarPasaje(params['id']);
      }
    });
  }

  cargarPasaje(id: string){
    this.pasajeService.getPasaje(id).subscribe(
      (result) => {
        Object.assign(this.pasaje,result);
        this.pasaje.pasajero = this.personas.find((item) => (item._id==this.pasaje.pasajero._id))!;
        //this.pasaje.categoriaPasajero = this.categorias.find((item) => (item==this.pasaje.categoriaPasajero))!;
      },
      error => {
        alert(error.msg)
      }
    )
  }

  change(precio: number){
    if(precio != 0){
      this.precioEmpty = true;
    }
  }

  onChange(categoria: string){
   if(categoria != ""){
     this.categoriaEmpty = true;
      if(this.precioEmpty == true){
        if(this.pasaje.categoriaPasajero == "Menor"){
          this.descuento = this.pasaje.precioPasaje - (25 * this.pasaje.precioPasaje) / 100;
        }else{
          if(this.pasaje.categoriaPasajero == "Jubilado"){
            this.descuento = this.pasaje.precioPasaje - (50 * this.pasaje.precioPasaje) / 100;
          }else{
            this.descuento = this.pasaje.precioPasaje;
          }
        }
      }
   }
  }

  listaPersona(){
    this.personas = new Array<Persona>();
    this.personaService.getPersonas().subscribe(
      (result) =>{
        this.personas = result;
        //console.log(this.personas)
      }
    )
  }

  guardarPasaje(){
    this.pasaje.precioPasaje = this.descuento;
    this.pasajeService.createPasaje(this.pasaje).subscribe(
      (result) =>{
        alert(result.msg);
        this.router.navigate(['punto3'])
      },
      error => {
        alert(error.msg)
      }
    )
  }

  actualizarPasaje(){
    this.pasaje.precioPasaje = this.descuento;
    this.pasajeService.updatePasaje(this.pasaje._id,this.pasaje).subscribe(
      (result) =>{
        alert("Pasaja Updated");
        this.router.navigate(['punto3'])
      },
      error => {
        alert(error.msg)
      }
    )
    
  }

}
