import { Injectable } from '@angular/core';
import { SignInData } from '../model/signInData';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly mockUser = new SignInData("Admin","admin");
// isAuthenticated = false;
private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));
  constructor(private router: Router) {
   
   }

  get LoginStatus() {
    // alert("IsLogin" + JSON.parse(localStorage.getItem('loggedIn')))
    return JSON.parse(localStorage.getItem('loggedIn'));
  }
  authenticate(SignInData :SignInData):boolean{
    
      if (this.checkCredentials(SignInData))
      {//alert("SignInData")
        // this.isAuthenticated =true;

       
        this.router.navigate(['/Categories']);
        localStorage.setItem('loggedIn', 'true');
        return true;
      }
      else{
        //alert("SignInData fail")
        localStorage.setItem('loggedIn', 'false');
        // this.isAuthenticated =false;
        return false;
       
      }
  }
  checkCredentials(SignInData :SignInData):boolean
  {
     //Get User Credientails from API to Valiate

     return this.checkUser(SignInData.getEmail()) && this.checkPassword(SignInData.getPassword());
  }

  checkUser(user):boolean
  {
    return user === this.mockUser.getEmail();
  }
 checkPassword(pass):boolean
  {
    return pass === this.mockUser.getPassword();
  }

  logOut(){

    setTimeout(() => {
      this.router.navigate(['Login']);
    }, 1000)
    localStorage.removeItem('loggedIn');

    // this.isAuthenticated =false;
    // this.router.navigate(['/Login']);
  }
}
