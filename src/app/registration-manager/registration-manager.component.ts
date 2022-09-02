import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-manager',
  templateUrl: './registration-manager.component.html',
  styleUrls: ['./registration-manager.component.css']
})
export class RegistrationManagerComponent implements OnInit {
  formValue:any;
  userName1:any;
  userEmail1:any;
  password1:any
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
  console.log(form.value);
    this.formValue=form.value;
    this.userName1=this.formValue.name1;
    this.userEmail1=this.formValue.email1;
    this.password1=this.formValue.password1;

    localStorage.setItem("userName1",this.userName1);
    localStorage.setItem("userEmail1",this.userEmail1);
    localStorage.setItem("password1",this.password1);
  }

}
