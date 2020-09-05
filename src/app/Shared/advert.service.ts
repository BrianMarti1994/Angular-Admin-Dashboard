import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable,BehaviorSubject, throwError } from 'rxjs';
import{map,catchError}from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private HTTP:HttpClient) { }
  private Headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
});

getAdvert() {
  const body = {
      // CustCode: CustCode,
      // UserType: UserType
  };
  return this.HTTP
      .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetAdverts", body, {
          headers: this.Headers
      })
      .pipe(
          map((res: any) => {
              if (res.d !== '') {
                  const Data = JSON.parse(res.d);
                  return Data;
              }
              return [];
          }),
          catchError((e) => {
              return throwError('Unable to fetch Data');
          })
      );
}
}
