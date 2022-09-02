import { Component, OnInit } from '@angular/core';
import { FormControl,FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formValue:any;
  userName:any;
  userEmail:any;
  password:any
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(form.value);
    this.formValue=form.value;
    this.userName=this.formValue.name;
    this.userEmail=this.formValue.email;
    this.password=this.formValue.password;

    localStorage.setItem("userName",this.userName);
    localStorage.setItem("userEmail",this.userEmail);
    localStorage.setItem("password",this.password);
  }

//   formValue:any;
//   userName:any;
//   password:any;
//   // uname: any;
  
  
//   regForm=new FormGroup({
//     uname:new FormControl("",[]),
//     upass:new FormControl("",[])
//   })
//   get uname(){
//     return this.regForm.get('uname')
//   }
//   get upass(){
//     return this.regForm.get('upass')
//   }


//   onSubmit() {
//     console.log(this.regForm.value);
//     this.formValue=this.regForm.value;
//     this.userName=this.formValue.uname;
//     this.password=this.formValue.upass;
//     localStorage.setItem("userName",this.userName);
//     localStorage.setItem("password",this.password)

//   }

}


