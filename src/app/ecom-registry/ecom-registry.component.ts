import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-registry',
  templateUrl: './ecom-registry.component.html',
  styleUrls: ['./ecom-registry.component.sass']
})
export class EcomRegistryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UpdateRegistry(e: { target: { checked: any; }; })
    {

    }
  
}
