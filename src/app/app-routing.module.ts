import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CategoriesComponent}from'./categories/categories.component';
import{BranchTypesComponent}from'./branch-types/branch-types.component';
import{LoginComponent}from'./login/login.component';
import{AdvertComponent}from'./advert/advert.component';
import{AuthGuard}from '../app/guards/auth.guard';
import{EcomRegistryComponent}from'../app/ecom-registry/ecom-registry.component'

const routes: Routes = [
  {path:"Categories",component:CategoriesComponent,canActivate:[AuthGuard]},
{path:"BranchTypes",component:BranchTypesComponent,canActivate:[AuthGuard]},
{path:"Login",component:LoginComponent},
{path:"Advert",component:AdvertComponent,canActivate:[AuthGuard]},
{path:"EcomRegistry",component:EcomRegistryComponent,canActivate:[AuthGuard]},
{path:'**',redirectTo:'/Login',pathMatch:'full'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[CategoriesComponent,BranchTypesComponent,LoginComponent,AdvertComponent]