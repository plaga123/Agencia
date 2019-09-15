import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viajes } from '../models/viajes';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  
  API="http://localhost:5000/api/";
  constructor(private http:HttpClient) { }


  getViajes(){
   return this.http.get(this.API+'viajes');
  }

  getFind(id):Observable<Viajes>{
    return this.http.get<Viajes>(this.API+'viajes/'+id);
  }

  Insert(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.API+'viajes',obj,{headers:headers});
  }

  Update(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.API+'viajes'+'/'+obj.codigo,obj,{headers:headers});
  }

  Delete(id){
    return this.http.delete(this.API+'viajes'+'/'+id);
  }

}
