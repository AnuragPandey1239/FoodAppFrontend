import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../Services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
result:any;
  constructor(private menu:MenuServiceService) { }

  ngOnInit(): void {
    this.menu.getMenu().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
    })
  }

}
