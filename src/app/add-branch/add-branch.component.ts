import { Component, OnInit } from '@angular/core';
import { BranchServiceService } from '../Services/branch-service.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branch:BranchServiceService) { }

  ngOnInit(): void {
  }
  addBranch(form:any){
    console.log(form.value);
    this.branch.addBranch(form.value).subscribe((res)=>{
      console.log(res);
      
    })
      
    }

}
