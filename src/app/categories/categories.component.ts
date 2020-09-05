import { Component, OnInit, OnDestroy } from '@angular/core';
 import {CategoriesService} from '../Shared/categories.service'
 import{CommonService}from'../Shared/common.service';
import { Subject, Subscription } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  isactive:string;
  Categoriesdata = [];
  CategoriesHQdata=[];
  dtTrigger: Subject<any> = new Subject();
  pageSize = 10;
  collection: number ;
  page=1;
  Subscript: Subscription;
Urls:any;
  constructor(private CategoriesService:CategoriesService,private CommonService:CommonService) {
  
   }

  ngOnInit(): void {
  
    this.dtOptions = {
     
       retrieve: true,
       responsive: true,
       processing: true,
       lengthChange: false,
       info: false,
       paging: false
     };
 this.GetCategories()
  }
  

  GetCategories() {
    this.Subscript = this.CategoriesService.getCategories().subscribe(
      
        (r: any) => {
       
          this.Categoriesdata = [];
          this.Categoriesdata = r
      
          this.collection = this.Categoriesdata.length;
            this.dtTrigger.next();
        },
        (e) => {
          this.Categoriesdata = [];
            this.dtTrigger.next();
            
        }
    );
}




  UpdateCategory(e: { target: { checked: any; }; },CatCode: any,CatName: any) {

    if(e.target.checked)
    {
      this.isactive="1"
    
    }
    else
    {
      this.isactive="0"
     
    }
    this.Subscript =  this.CategoriesService.updateCategories( this.isactive,CatCode).subscribe(
      
        (r: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: CatName +' Updated Successfully!',
            showConfirmButton: false,
            timer: 1500
          })
         
        },
        (e) => {
          // this.CategoriesHQdata = [];
          //   this.dtTrigger.next();
            // this.AlerMessage(
            //     'System Error US002, ' + e + ', Please Contact Your System Administrator',
            //     'User Support Page'
            // );
        }
    );
  }
  
SyncCategories()
{
  this.Subscript = this.CategoriesService.SyncCategories().subscribe(
    
    (r: any) => {
     
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Data Synced Successfully!',
        showConfirmButton: false,
        timer: 1500
      })
    },
    (e) => {
      this.CategoriesHQdata = [];
        this.dtTrigger.next();
        
    }
);
}

  ngOnDestroy(){
    this.Subscript.unsubscribe
  }
}
