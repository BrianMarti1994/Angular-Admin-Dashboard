import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService}from '../Shared/authentication.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private AuthenticationService:AuthenticationService
  ,private Router:Router)
{

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.AuthenticationService.LoginStatus)
    {
      
      return true;
    }
     else{
      this.Router.navigate(['/Login']);
      return false;
     }
  }
  
}
