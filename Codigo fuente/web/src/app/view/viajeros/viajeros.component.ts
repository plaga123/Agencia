import { Component, OnInit } from '@angular/core';
import { ViajerosService } from 'src/app/services/viajeros.service';
import { Viajeros } from 'src/app/models/viajeros';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.css']
})
export class ViajerosComponent implements OnInit {

  lstViajeros:Viajeros[];
  constructor(private viajerosServi:ViajerosService) { }

  ngOnInit() {
    this.getViajeros();
  }

  getViajeros(){
    this.viajerosServi.getViajeros().subscribe((data:any[])=>{      
      this.lstViajeros = data;
    },(err)=>{
      console.log(err);
    });
  }

  Delete(id){
    if(confirm("¿Desea eliminar este cliente ?")){
      this.viajerosServi.Delete(id).subscribe((data:Viajeros)=>{
        alert("Cliente Eliminado "+ data.nombre);
        this.getViajeros();
      },(err)=>{
        console.log(err);
      });
    }
  }

}
