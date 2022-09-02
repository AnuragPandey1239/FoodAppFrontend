import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  loginFormValue:any;
  loginUserName1:any;
  loginUserEmail1:any;
  loginPassword1:any;

  constructor() { }

  ngOnInit(): void {
  }
  login(form:any){
    console.log(form.value);
    this.loginFormValue=form.value;
    this.loginUserName1=this.loginFormValue.name;
    this.loginUserEmail1=this.loginFormValue.email;
    this.loginPassword1=this.loginFormValue.password;
    localStorage.setItem('loginUserName1',this.loginUserName1);
    localStorage.setItem('loginUserEmail1',this.loginUserEmail1);
    localStorage.setItem('loginPassword1',this.loginPassword1);
 
 
   }
}
