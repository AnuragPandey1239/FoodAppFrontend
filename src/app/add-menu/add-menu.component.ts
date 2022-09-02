import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../Services/menu-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private menu:MenuServiceService) { }

  ngOnInit(): void {
  }
  addMenu(form:any){
    console.log(form.value);
    this.menu.addMenu(form.value).subscribe((res)=>{
      console.log(res);
      
    })
      
    }

}
