import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { KitchenMasterDashboardComponent } from './components/kitchen-master-dashboard/kitchen-master-dashboard.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllSupervisorsComponent } from './components/all-supervisors/all-supervisors.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CustomerAllItemsComponent } from './components/customer-all-items/customer-all-items.component';
import { CustomerCartItemsComponent } from './components/customer-cart-items/customer-cart-items.component';
import { CustomerOrderedItemsComponent } from './components/customer-ordered-items/customer-ordered-items.component';
import {CarouselModule} from 'primeng/carousel';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerOrderPopupComponent } from './components/customer-order-popup/customer-order-popup.component';
import { DatePipe } from '@angular/common';
import { HelpOrderPopupComponent } from './components/help-order-popup/help-order-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CustomerDashboardComponent,
    AdminDashboardComponent,
    KitchenMasterDashboardComponent,
    SupervisorDashboardComponent,
    AddChefComponent,
    AddItemComponent,
    AddSupervisorComponent,
    AllItemsComponent,
    AllChefsComponent,
    AllSupervisorsComponent,
    EditItemComponent,
    CustomerAllItemsComponent,
    CustomerCartItemsComponent,
    CustomerOrderedItemsComponent,
    AddCustomerComponent,
    CustomerOrderPopupComponent,
    HelpOrderPopupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    CarouselModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
