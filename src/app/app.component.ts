import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService}from '../app/Shared/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PositiveEcomSupport';

  constructor(public AuthenticationService:AuthenticationService,private Router:Router){
   
  
  }

  logOut()
  {
    this.AuthenticationService.logOut();
  }
//   redirect()
// {
//   this.router.navigate(['/Login'])
// }

}
