import { Component, OnInit } from '@angular/core';
import {AdvertService} from '../Shared/advert.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.sass']
})
export class AdvertComponent implements OnInit {
  Advertdata = [];
  AdvertHQdata=[];

  dtOptions: DataTables.Settings = {};
  isactive:string;

  dtTrigger: Subject<any> = new Subject();
  pageSize = 10;
  collection: number ;
  page=1;
  Subscript: Subscription;
  constructor(private AdvertService:AdvertService) { }
 
  ngOnInit(): void {
    this.dtOptions = {
      // pagingType: 'full_numbers',
        // pageLength:1 ,
       retrieve: true,
       responsive: true,
       processing: true,
       lengthChange: false,
       info: false,
      //  searching: false,
       paging: false
     };
     this.GetAdvert()
  }
  GetAdvert() {
    this.AdvertService.getAdvert().subscribe(
      
        (r: any) => {
       
          this.Advertdata = [];
          //this.Advertdata = r
      
         
          const Res =r
      
          // [AdvertsID]
          // ,[AdvertImage]
          // ,[ItemCode]
          // ,[StartDate]
          // ,[EndDate]
          // ,[Slider]
          // ,[AdvertEnabled]
          
          Res.forEach(R => {
         
            this.Advertdata.push({
              'AdvertsID':R.AdvertsID,
              'ItemCode':R.ItemCode,
              'StartDate':new Date(parseInt(R.StartDate.substr(6))),
              'EndDate': new Date(parseInt(R.EndDate.substr(6))),
              'Slider':R.Slider,
              'AdvertEnabled':R.AdvertEnabled
                 });
          })
          this.collection = this.Advertdata.length;
            this.dtTrigger.next();
        },
        (e) => {
          this.Advertdata = [];
            this.dtTrigger.next();
            // this.AlerMessage(
            //     'System Error US002, ' + e + ', Please Contact Your System Administrator',
            //     'User Support Page'
            // );
        }
    );
}

UpdateAdvert(AdvertId)
{

}
UpdateSlider(AdvertId)
{

}
}
