import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajesComponent } from './view/viajes/viajes.component';
import { ViajerosComponent } from './view/viajeros/viajeros.component';
import { ViajerosFormComponent } from './view/viajeros/viajeros-form/viajeros-form.component';
import { ViajesFormComponent } from './view/viajes/viajes-form/viajes-form.component';
import { DetviajesComponent } from './view/detviajes/detviajes.component';
import { DetviajesFormComponent } from './view/detviajes/detviajes-form/detviajes-form.component';
import { InicioComponent } from './view/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',component:InicioComponent
  },
  {
    path:'viajes',component:ViajesComponent
  },
  {
    path:'viajeros',component:ViajerosComponent
  },
  {
    path:'viajeros-form',component:ViajerosFormComponent
  },
  {
    path:'viajeros-form/:id',component:ViajerosFormComponent
  },
  {
    path:'viajes-form',component:ViajesFormComponent    
  },
  {
    path:'viajes-form/:id',component:ViajesFormComponent    
  },
  {
    path:'detviajes',component:DetviajesComponent    
  },
  {
    path:'detviajes-form',component:DetviajesFormComponent    
  },
  {
    path:'detviajes-form/:id',component:DetviajesFormComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
