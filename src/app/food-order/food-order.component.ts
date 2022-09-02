import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../Services/food-order.service';
import { ItemServiceService } from '../Services/item-service.service';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {
result:any;
  constructor(private foodOrder:FoodOrderService) { }

  ngOnInit(): void {
    this.foodOrder.getFoodOrder().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
    })
  }

}
