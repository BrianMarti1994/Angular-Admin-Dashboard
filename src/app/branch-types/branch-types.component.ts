import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {BranchTypesService} from '../Shared/branch-types.service'
import { FormBuilder, FormArray, Validators } from "@angular/forms";

import { Subject, Subscription } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-branch-types',
  templateUrl: './branch-types.component.html',
  styleUrls: ['./branch-types.component.css']
})
export class BranchTypesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  isactive:string;
  BranchTypesData = [];
  CategoriesHQdata=[];
  dtTrigger: Subject<any> = new Subject();
  pageSize = 10;
  collection: number ;
  page=1;
  branchname: any;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  ImageData :any;
  Subscript: Subscription;
  constructor(private BranchTypesService:BranchTypesService) {
    
     }
 
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
 this.GetBranchTypes()
  }

  GetBranchTypes() {
    this.Subscript =  this.BranchTypesService.getBranchTypes().subscribe(
        (r: any) => {
          this.BranchTypesData = [];
      
          this.BranchTypesData =r
          this.collection = this.BranchTypesData.length;
            this.dtTrigger.next();
        },
        (e) => {
          this.BranchTypesData = [];
            this.dtTrigger.next();
            // this.AlerMessage(
            //     'System Error US002, ' + e + ', Please Contact Your System Administrator',
            //     'User Support Page'
            // );
        }
    );
}
UpdateBranch(e: { target: { checked: any; }; },BranchTypeCode: any,BranchType: any) {

  if(e.target.checked)
  {
    this.isactive="1"
  
  }
  else
  {
    this.isactive="0"
   
  }
  this.Subscript =  this.BranchTypesService.updateBranchTypes( this.isactive,BranchTypeCode).subscribe(
    
      (r: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: BranchType +' Updated Successfully!',
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

  // processFile(fileInput: any) {
  //   this.imageError = null;
  //   if (fileInput.target.files && fileInput.target.files[0]) {
  //       // Size Filter Bytes
  //       const max_size = 20971520;
  //       const allowed_types = ['image/png', 'image/jpeg'];
  //       const max_height = 15200;
  //       const max_width = 25600;

  //       if (fileInput.target.files[0].size > max_size) {
  //           this.imageError =
  //               'Maximum size allowed is ' + max_size / 1000 + 'Mb';

  //           return false;
  //       }

  //       // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
  //       //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
  //       //     return false;
  //       // }
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //           const image = new Image();
  //           image.src = e.target.result;
  //           image.onload = rs => {
  //               const img_height = rs.currentTarget['height'];
  //               const img_width = rs.currentTarget['width'];

  //               console.log(img_height, img_width);


  //               if (img_height > max_height && img_width > max_width) {
  //                   this.imageError =
  //                       'Maximum dimentions allowed ' +
  //                       max_height +
  //                       '*' +
  //                       max_width +
  //                       'px';
  //                   return false;
  //               } else {
  //                   const imgBase64Path = e.target.result;
  //                   this.cardImageBase64 = imgBase64Path;
  //                   this.isImageSaved = true;
                   
  //                   this.ImageData = this.cardImageBase64
  //                   // this.previewImagePath = imgBase64Path;
  //               }
  //           };
  //       };
  //       // alert( "THis"+  JSON.stringify(fileInput.target.files[0]) )
  //        reader.readAsDataURL(fileInput.target.files[0]);
  //   }
  // }
  // SaveIamge()
  // {
  //   this.Subscript =this.BranchTypesService.insertImage(this.ImageData).subscribe(
  //     (r: any) => {
  //       // this.BranchTypesData = [];
    
  //       // this.BranchTypesData =r
  //       //   this.dtTrigger.next();
  //     },
  //     (e) => {
  //       // this.BranchTypesData = [];
  //       //   this.dtTrigger.next();
  //         // this.AlerMessage(
  //         //     'System Error US002, ' + e + ', Please Contact Your System Administrator',
  //         //     'User Support Page'
  //         // );
  //     }
  // );
  // }
  GetBrName(BrName: any)
  {
    this.branchname = BrName
  }
  SyncBranchTypes()
{
  this.Subscript = this.BranchTypesService.SyncBranchTypes().subscribe(
    
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
