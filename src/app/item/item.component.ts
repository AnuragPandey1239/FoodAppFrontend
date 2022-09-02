import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../Services/item-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private item:ItemServiceService) { }

  ngOnInit(): void {
  }
  addItem(form:any){
    console.log(form.value);
    this.item.addItem(form.value).subscribe((res)=>{
      console.log(res);
      
    })
    
  }

}

