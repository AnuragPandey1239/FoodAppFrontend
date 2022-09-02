import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  constructor() { }
  isLoggedIn1() {
    //logic
    if(localStorage.getItem('loginPassword1')==localStorage.getItem('password1')
    && localStorage.getItem('loginUserName1')==localStorage.getItem('userName1')) {
      return true;
    } 
    else{
    return false;
  }
}
}
