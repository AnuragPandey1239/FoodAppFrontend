import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddFoodOrderComponent } from './add-food-order/add-food-order.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { AuthGuard } from './Guards/auth.guard';
import { Auth1Guard } from './Guards/auth1.guard';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemComponent } from './item/item.component';
import { Item1Component } from './item1/item1.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationManagerComponent } from './registration-manager/registration-manager.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'add-admin',component:AddAdminComponent,canActivate:[AuthGuard]},
  {path:'edit-admin/:id',component:EditAdminComponent,canActivate:[AuthGuard]},
  {path:'admin-details',component:AdminDetailsComponent,canActivate:[AuthGuard]},
  {path:'add-manager',component:AddManagerComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserComponent},
  {path:'edit-item',component:EditItemComponent,canActivate:[AuthGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'items',component:ItemComponent},
  {path:'item1',component:Item1Component},
  {path:'item-details',component:ItemDetailsComponent},
  {path:'add-menu',component:AddMenuComponent},
  {path:'food-order',component:FoodOrderComponent,canActivate:[Auth1Guard]},
  {path:'add-order',component:AddFoodOrderComponent},
  {path:'add-branch',component:AddBranchComponent},
  {path:'registration-manager',component:RegistrationManagerComponent},
  {path:'login-manager',component:LoginManagerComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
