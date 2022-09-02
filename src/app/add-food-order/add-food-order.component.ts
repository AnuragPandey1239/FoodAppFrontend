import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../Services/food-order.service';

@Component({
  selector: 'app-add-food-order',
  templateUrl: './add-food-order.component.html',
  styleUrls: ['./add-food-order.component.css']
})
export class AddFoodOrderComponent implements OnInit {

  constructor(private foodOrder:FoodOrderService) { }

  ngOnInit(): void {
  }
  addAdmin(form:any){
    console.log(form.value);
    this.foodOrder.addFoodOrder(form.value).subscribe((res)=>{
      console.log(res);
      
    })
      
    }

}
