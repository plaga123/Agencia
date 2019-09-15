import { Component, OnInit } from '@angular/core';
import { DetviajesService } from 'src/app/services/detviajes.service';

@Component({
  selector: 'app-detviajes',
  templateUrl: './detviajes.component.html',
  styleUrls: ['./detviajes.component.css']
})
export class DetviajesComponent implements OnInit {

  lstdetViajes:any[];
  constructor(private det:DetviajesService) { }

  ngOnInit() {
    this.getDet();
  }

  getDet(){
    this.det.getDet().subscribe((data:any[])=>{
      this.lstdetViajes = data;  
    },(err)=>{
      console.log(err);
    });
  }

  Delete(id){
    if(confirm('¿Desea eliminar el registro?')){
      this.det.Delete(id).subscribe(data=>{
        this.getDet();
      },(err)=>{
        console.log(err);
      });
    }  
  }
}
