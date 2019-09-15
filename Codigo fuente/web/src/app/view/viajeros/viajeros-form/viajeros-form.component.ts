import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViajerosService } from 'src/app/services/viajeros.service';
import { Viajeros } from 'src/app/models/viajeros';

@Component({
  selector: 'app-viajeros-form',
  templateUrl: './viajeros-form.component.html',
  styleUrls: ['./viajeros-form.component.css']
})
export class ViajerosFormComponent implements OnInit {

  formGroup: FormGroup; 
  id:any;
  constructor(private fb:FormBuilder,
  private activaRouter:ActivatedRoute,
  private viajerosServi:ViajerosService,
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
    cedula:null,
    nombre:null,
    telefono:null,
    direccion:null
  });    
}


Find(id){
  this.viajerosServi.getFind(id).subscribe(data =>this.CargarFormulario(data),
  err=>{
    console.log(err);
  });
 
}


CargarFormulario(obj:Viajeros){  
  this.formGroup = this.fb.group({
    cedula:obj.cedula,
    nombre:obj.nombre,
    telefono:obj.telefono,
    direccion:obj.direccion
    });
  }   


Insert(){
  let obj = Object.assign({},this.formGroup.value);
  this.viajerosServi.Insert(obj).subscribe((data:Viajeros)=>{
    alert("Nuevo Cliente "+data.nombre);
    this.router.navigateByUrl('/viajeros');
  },(err)=>{
    console.log(err);
  });
}

Update(){
  let obj = Object.assign({},this.formGroup.value);
  this.viajerosServi.Update(obj).subscribe((data:Viajeros)=>{
    alert("Actualizado Cliente "+data.nombre);
    this.router.navigateByUrl('/viajeros');
  },(err)=>{
    console.log(err);
  });
}




}
