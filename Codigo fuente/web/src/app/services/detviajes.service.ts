import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetviajesService {

  API="http://localhost:5000/api/";
  constructor(private http:HttpClient) { }


  getDet(){
   return this.http.get(this.API+'detviajes');
  }

  getFind(id){
    return this.http.get(this.API+'detviajes/'+id);
  }

  Insert(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.API+'detviajes',obj,{headers:headers});
  }

  Update(obj){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.API+'detviajes'+'/'+obj.id,obj,{headers:headers});
  }

  Delete(id){
    return this.http.delete(this.API+'detviajes'+'/'+id);
  }




}
