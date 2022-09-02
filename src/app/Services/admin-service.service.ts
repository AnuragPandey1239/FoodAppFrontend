import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  getAdmin() {
    return this.http.get("http://localhost:8080/findalladmin")

  }
  addAdmin(admin:any) {
    return this.http.post("http://localhost:8080/saveadmin",admin)
  }

  // updateData(_id:any,product:any) {
  //   return this.http.put(`https://ty-shop.herokuapp.com/api/products/${_id}`,product)
  // }

  // deleteData(id:any){
  //   return this.http.delete(`http://localhost:8080/deleteadmin/${id}`)
  // }
  

}
