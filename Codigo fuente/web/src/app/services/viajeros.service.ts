import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viajeros } from '../models/viajeros';

@Injectable({
  providedIn: 'root'
})
export class ViajerosService {

  API="http://localhost:5000/api/";
  constructor(private http:HttpClient) { }


  getViajeros(){
   return this.http.get(this.API+'viajeros');
  }

  getFind(id):Observable<Viajeros>{
    return this.http.get<Viajeros>(this.API+'viajeros/'+id);
  }

  Insert(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.API+'viajeros',obj,{headers:headers});
  }

  Update(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.API+'viajeros'+'/'+obj.cedula,obj,{headers:headers});
  }

  Delete(id){
    return this.http.delete(this.API+'viajeros'+'/'+id);
  }

}
