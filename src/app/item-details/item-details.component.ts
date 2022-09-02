import { Component, OnInit, Input } from '@angular/core';
import { ItemServiceService } from '../Services/item-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
@Input() result:any;
  constructor(private item:ItemServiceService) { }

  ngOnInit(): void {
  
  this.item.getItem().subscribe((data)=>{
    this.result=data;
    console.log(this.result);
    
  })


  }

deleteItem(_id:any){
this.item.deleteData(_id).subscribe((res)=>{
console.log(res);
 })
}
item2(result:any,result1:any,result2:any,result3:any,result4:any,result5:any){
  console.log("itemId:",result);
  console.log("itemName:",result1);
  console.log("type:",result2);
  console.log("quantity:",result3);
  console.log("price:",result4);
  console.log("image:",result5);

}
}



