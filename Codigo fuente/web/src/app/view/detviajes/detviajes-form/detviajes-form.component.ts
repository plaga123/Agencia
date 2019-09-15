import { Component, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/services/viajes.service';
import { ViajerosService } from 'src/app/services/viajeros.service';
import { DetviajesService } from 'src/app/services/detviajes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detviajes-form',
  templateUrl: './detviajes-form.component.html',
  styleUrls: ['./detviajes-form.component.css']
})
export class DetviajesFormComponent implements OnInit {

  lstViajes:any[];
  lstViajeros:any[];
  id:any;
  obj ={
    id:0,
    cedula:null,
    nombre:null,
    codigo:null,
    numero:null,
    origen:null,
    destino:null
  }

  constructor(private viajesServi:ViajesService,
    private viajerosServi:ViajerosService,
    private detServices:DetviajesService,
    private activeRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.params['id'];
    this.getViajeros();
    this.getViajes();
    if(this.id){
      this.Find(this.id);
    }
    
  }

  getViajes(){
    this.viajesServi.getViajes().subscribe((data:any[])=>{
      this.lstViajes = data;      
    },(err)=>{
      console.log(err);
    });
  }

  getViajeros(){
    this.viajerosServi.getViajeros().subscribe((data:any[])=>{
      this.lstViajeros = data;     
    },(err)=>{
      console.log(err);
    });
  }

  Viajeros(e){
    this.obj.cedula=e.cedula;
    this.obj.nombre=e.nombre;
  }

  Viajes(e){
    this.obj.codigo=e.codigo;
    this.obj.origen=e.origen;
    this.obj.destino=e.destino;
  }

  Insert(){    
    if(this.obj.cedula== null || this.obj.codigo == null){
      alert('Debe agregar Cliente y viaje');
    }else{
      this.detServices.Insert(this.obj).subscribe((data)=>{      
        this.router.navigateByUrl('/viajes');
      },(err)=>{
        console.log(err);
      });
    }
  }

  Update(){
    this.detServices.Update(this.obj).subscribe((data)=>{    
      this.router.navigateByUrl('/detviajes')
    },(err)=>{
      console.log(err);
    });
  }

  Find(id){
    this.detServices.getFind(id).subscribe((data:any)=>{
      this.obj ={
        id:data[0].id,
        cedula:data[0].cedula,
        nombre:data[0].nombre,
        codigo:data[0].codigo,
        numero:data[0].numero,
        origen:data[0].origen,
        destino:data[0].destino
      }      
    },(err)=>{
      console.log(err);
    });
  }

}
