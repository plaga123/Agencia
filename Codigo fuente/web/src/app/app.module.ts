import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { ViajesComponent } from './view/viajes/viajes.component';
import { ViajerosComponent } from './view/viajeros/viajeros.component';
import { ViajerosFormComponent } from './view/viajeros/viajeros-form/viajeros-form.component';
import { ViajesFormComponent } from './view/viajes/viajes-form/viajes-form.component';
import { DetviajesComponent } from './view/detviajes/detviajes.component';
import { DetviajesFormComponent } from './view/detviajes/detviajes-form/detviajes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ViajesComponent,
    ViajerosComponent,
    ViajerosFormComponent,
    ViajesFormComponent,
    DetviajesComponent,
    DetviajesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
