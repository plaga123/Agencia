import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { ViajesService } from 'src/app/services/viajes.service';
import { Viajes } from 'src/app/models/viajes';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styleUrls: ['./viajes-form.component.css']
})
export class ViajesFormComponent implements OnInit {

  formGroup: FormGroup; 
  id:any;
  constructor(private fb:FormBuilder,
  private activaRouter:ActivatedRoute,
  private viajesServi:ViajesService,
  private router:Router) { }

  ngOnInit(){
    this.id = this.activaRouter.snapshot.params['id'];
    this.CargarFrmVacio();   
    if(this.id){
      this.Find(this.id);    
    } 
  }  

  
CargarFrmVacio(){ 
  this.formGroup = this.fb.group({
    codigo:0,
    numero:null,
    origen:null,
    destino:null,
    precio:0
  });    
}

Find(id){
  this.viajesServi.getFind(id).subscribe(data =>this.CargarFormulario(data),
  err=>{
    console.log(err);
  }); 
}

CargarFormulario(obj:Viajes){  
  this.formGroup = this.fb.group({
    codigo:obj.codigo,
    numero:obj.numero,
    origen:obj.origen,
    destino:obj.destino,
    precio:obj.precio,
    });
  }   


Insert(){
  let obj = Object.assign({},this.formGroup.value);
  this.viajesServi.Insert(obj).subscribe((data:Viajes)=>{
    alert("Nuevo Viaje Codigo"+data.codigo);
    this.router.navigateByUrl('/viajes');
  },(err)=>{
    console.log(err);
  });
}

Update(){
  let obj = Object.assign({},this.formGroup.value);
  this.viajesServi.Update(obj).subscribe((data:Viajes)=>{
    alert("Actualizado Viaje Codigo"+data.codigo);
    this.router.navigateByUrl('/viajes');
  },(err)=>{
    console.log(err);
  });
}

}
