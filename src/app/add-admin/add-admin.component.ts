import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private admin:AdminServiceService) { }
  ngOnInit(): void {
    
  }

  addAdmin(form:any){
    console.log(form.value);
    this.admin.addAdmin(form.value).subscribe((res)=>{
      console.log(res);
      
    })
      
    }
    
  }



