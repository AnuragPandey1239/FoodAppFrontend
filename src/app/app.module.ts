import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { StaffComponent } from './staff/staff.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { UserComponent } from './user/user.component';
// import { ItemsComponent } from './items/items.component';
// import { EditItemsComponent } from './edit-items/edit-items.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { Item1Component } from './item1/item1.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { AddFoodOrderComponent } from './add-food-order/add-food-order.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { RegistrationManagerComponent } from './registration-manager/registration-manager.component';
import { LoginManagerComponent } from './login-manager/login-manager.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    StaffComponent,
    AddAdminComponent,
    EditAdminComponent,
    AdminDetailsComponent,
    AddManagerComponent,
    ItemDetailsComponent,
    EditItemComponent,
    UserComponent,
    // ItemsComponent,
    // EditItemsComponent,
    RegistrationComponent,
    LoginComponent,
    MenuComponent,
    ItemComponent,
    Item1Component,
    AddMenuComponent,
    FoodOrderComponent,
    AddFoodOrderComponent,
    AddBranchComponent,
    RegistrationManagerComponent,
    LoginManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
