import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginFormValue:any;
  loginUserName:any;
  loginUserEmail:any;
  loginPassword:any;

  ngOnInit(): void {
  }
  login(form:any){
   console.log(form.value);
   this.loginFormValue=form.value;
   this.loginUserName=this.loginFormValue.name;
   this.loginUserEmail=this.loginFormValue.email;
   this.loginPassword=this.loginFormValue.password;
   localStorage.setItem('loginUserName',this.loginUserName);
   localStorage.setItem('loginUserEmail',this.loginUserEmail);
   localStorage.setItem('loginPassword',this.loginPassword);


  }
}
