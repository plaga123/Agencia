import { Component, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viajes } from 'src/app/models/viajes';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  lstViajes:Viajes[];
  constructor(private serviViajes:ViajesService) { }

  ngOnInit() {
    this.getViajes();
  }

  getViajes(){
    this.serviViajes.getViajes().subscribe((data:any[])=>{
      this.lstViajes = data;      
    },(err)=>{
      console.log(err);
    });
  }

  Delete(id){
    this.serviViajes.Delete(id).subscribe((data:Viajes)=>{
      alert("Viaje Eliminado Codigo "+ data.codigo);
      this.getViajes();
    },(err)=>{
      console.log(err);
    });
  }



}


