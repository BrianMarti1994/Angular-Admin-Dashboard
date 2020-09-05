import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable,BehaviorSubject, throwError } from 'rxjs';
import{map,catchError}from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BranchTypesService {

  constructor(private HTTP:HttpClient) { }
  private Headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
});


getBranchTypes() {
  const body = {
      // CustCode: CustCode,
      // UserType: UserType
  };
  return this.HTTP
      .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetBranchTypes", body, {
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
insertImage(ImageData: any) {
  alert(ImageData)
  const body = {
    Image: ImageData
      // UserType: UserType
  };
  return this.HTTP
      .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/InsertImage", body, {
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
SyncBranchTypes() {
    const body = {
        
    };
    return this.HTTP
        .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetBranchTypesHQ", body, {
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
  updateBranchTypes(Enabled: any,BranchCode: any) {
    const body = {
        Enabled : Enabled ,
        BranchCode : BranchCode
      
    };
    return this.HTTP
        .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/UpdateBranchTypes", body, {
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
