import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth1Service } from '../Services/auth1.service';


@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.auth1.isLoggedIn1()){
        return true;
      }
      else{
        window.alert("Login first");
        return false;
      }
      
    }
    constructor(private auth1:Auth1Service) {}
    
}
