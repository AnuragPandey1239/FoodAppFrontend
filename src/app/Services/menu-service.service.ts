import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http:HttpClient) { }
  getMenu(){
    return this.http.get("http://localhost:8080/findallmenu")
  }
  
  addMenu(menu:any){
    return this.http.post("http://localhost:8080/savemenu",menu)
  }
}
