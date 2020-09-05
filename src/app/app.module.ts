import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule ,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BranchTypesComponent } from './branch-types/branch-types.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdvertComponent } from './advert/advert.component';
import { EcomRegistryComponent } from './ecom-registry/ecom-registry.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BranchTypesComponent,
    routingComponent,
    LoginComponent,
    AdvertComponent,
    EcomRegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
