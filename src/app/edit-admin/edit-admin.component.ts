import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  result:any;
  selectedAdmin: any;
  

  constructor(private route:ActivatedRoute,private admin:AdminServiceService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    console.log(id);
    this.admin.getAdmin().subscribe((data)=>{
      this.result=data;

      for(let r of this.result.products){
        if(r._id ===id){
          this.selectedAdmin=r;
          console.log(this.selectedAdmin);
          
        }
      }
    })
  }
  
  //   editAdmin(form:any){
  //     this.admin.updateData(this.selectedAdmin._id,form.value).subscribe((res)=>{
  //        console.log(res);
         
  //     })
    
  // }
  // deleteProduct(_id:any){
  //   this.admin.deleteData(_id).subscribe((res)=>{
  //   console.log(res);
  //    })
  
  // }
  
  }


