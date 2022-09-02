import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  result:any;
  id1:any;
  http:any;
  constructor(private admin:AdminServiceService) { }

  ngOnInit(): void {
    this.admin.getAdmin().subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
    })
    this.admin.getAdmin().subscribe((data)=>{
      this.result.branch=data;
      console.log(this.result.branch);
      
    })


}
// deleteAdmin(_id:any){
//   this.admin.deleteData(_id).subscribe((res)=>{
//   console.log(res);
//    })

// }
}
