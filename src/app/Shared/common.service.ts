import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable,BehaviorSubject, throwError } from 'rxjs';
import{map,catchError}from'rxjs/operators';
import { delay, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiPath: any;
  public response;
  constructor(private _http:HttpClient) {
    //this.GetConfig()
   }

    async GetConfig() {

    let response = await this._http.get<string>("assets/registry.json").pipe(
      concatMap( item => of(item).pipe ( delay( 1000 ) ))
  ).subscribe ( Data => {
    
    this.apiPath = Data["ApiLink"];
    alert(JSON.stringify(this.apiPath))
    return this.apiPath
  });
    // const JsonUrl = 'assets/registry.json';
    // const Headers = new HttpHeaders({
    //     'Content-Type': 'application/json; charset=utf-8'
    // });
    // return this.HTTP
    //     .get(JsonUrl, { headers: Headers })
    //     .pipe(
    //         map((r: any) => {
            
    //             if (r !== '') {
    //                 return r;
    //             }
    //             return null;
    //         })
    //     )
    //     .subscribe((r) => {
         
    //         this.SetPath(r);
    //        this.apiPath = r
    //     });
    // alert("main")
    //  this._http.get<any>("assets/registry.json")
    
    //  .subscribe(data => {
    //   alert("in");
    //   //his.companyName = data["CompanyName"];
    //   this.apiPath = data["ApiLink"];
     
    // });
     
}

// SetPath(Path: any) {
 
//   this.apiPath = Path
 
//   this.GetPath()
// }

async GetPath() {

alert("Inpath" + this.apiPath)
return  this.apiPath;
}

}
