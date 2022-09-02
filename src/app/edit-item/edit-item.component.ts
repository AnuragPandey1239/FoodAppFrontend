import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../Services/item-service.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

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

