import { Component, OnInit } from '@angular/core';
import{CommonService}from'../Shared/common.service';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/toPrmise';
import { delay, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';
import{AuthenticationService}from '../Shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private CommonService:CommonService,
    private _http: HttpClient
    ,private router: Router,
    private AuthenticationService:AuthenticationService ) {
      this.AuthenticationService.logOut();
  }

  ngOnInit(): void {
  
  
  }
  // async GetUrl() {
  //   let response = this.CommonService.GetPath() 
  //   alert(JSON.stringify(response))
 
  // }
  
  Login(userName,Password)
  {
  
    const signInData = new SignInData(userName,Password)
    this.AuthenticationService.authenticate(signInData);
   
  }
}
