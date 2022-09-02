import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http:HttpClient) { }

getItem(){
  return this.http.get("http://localhost:8080/findallitem")
}

addItem(item:any){
  return this.http.post("http://localhost:8080/saveitem",item)
}

deleteData(item:any){
    return this.http.delete(`http://localhost:8080/deleteitem`,item)
  }
}
