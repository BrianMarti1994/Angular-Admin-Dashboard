import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject, throwError } from 'rxjs';
import{map,catchError}from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // http://localhost:31138/EcomSupport/EcomSupportAPI.aspx
  constructor(private HTTP:HttpClient) { }

  private Headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
});


getCategories() {
  const body = {
      
  };
  return this.HTTP
      .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetCategories", body, {
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


  // getCategories():Observable<any>
  // { 
  
  //   const obj = {};
  //   obj["AppType"]=value
  //   let body = JSON.stringify(obj)

  //   const  headers = new  HttpHeaders().set("Content-Type", "application/json");
  //   return this.HTTP.post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetCategories",body,{headers})

  // }
  SyncCategories() {
    const body = {
        
    };
    return this.HTTP
        .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/GetCategoriesHQ", body, {
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

  
  updateCategories(Enabled: any,CatCode: any) {
    const body = {
      Enabled : Enabled ,
      CatCode : CatCode
      
    };
    return this.HTTP
        .post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/UpdateCategories", body, {
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
  // updateCategories(Enabled: any,CatCode: any):Observable<any>
  // { 
  
  //   const obj = {};
  //   obj["Enabled"]=Enabled
  //   obj["CatCode"]=CatCode
  //   let body = JSON.stringify(obj)

  //   const  headers = new  HttpHeaders().set("Content-Type", "application/json");
  //   return this.HTTP.post("http://localhost:31138/EcomSupport/EcomSupportAPI.aspx/UpdateCategories",body,{headers})

  // }
}
