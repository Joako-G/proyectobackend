import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';

const routes: Routes = [
  {path: "libro", component: Punto1Component},
  {path: "punto2", component: Punto2Component},
  {path: "punto3", component: Punto3Component},
  {path: "formulario", component: LibroFormComponent},
  {path: "formularioT", component: TransaccionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
