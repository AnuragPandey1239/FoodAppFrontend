import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  constructor(private http:HttpClient) { }
  getFoodOrder(){
    return this.http.get("http://localhost:8080/findallfoodorder")
  }
  
  addFoodOrder(foodorder:any){
    return this.http.post("http://localhost:8080/savefoodorder",foodorder)
  }
  
  deleteData(_id:any){
      return this.http.delete(`http://localhost:8080/deletefoodorder/${_id}`)
    }
}
