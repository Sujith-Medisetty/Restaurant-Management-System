import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AllSupervisorsComponent } from './components/all-supervisors/all-supervisors.component';
import { CustomerAllItemsComponent } from './components/customer-all-items/customer-all-items.component';
import { CustomerCartItemsComponent } from './components/customer-cart-items/customer-cart-items.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerOrderedItemsComponent } from './components/customer-ordered-items/customer-ordered-items.component';
import { HomeComponent } from './components/home/home.component';
import { KitchenMasterDashboardComponent } from './components/kitchen-master-dashboard/kitchen-master-dashboard.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { AdminAuthGuard } from './Guards/admin-auth.guard';
import { CustomerAuthGuardGuard } from './Guards/customer-auth-guard.guard';
import { KitchenMasterAuthGuard } from './Guards/kitchen-master-auth.guard';
import { SupervisorAuthGuard } from './Guards/supervisor-auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"CustomerDashboard",component:CustomerDashboardComponent,canActivate:[CustomerAuthGuardGuard],children:[
    {path:'',redirectTo:'Items',pathMatch:'full'},
    {path:'Items',component:CustomerAllItemsComponent},
    {path:'Cart',component:CustomerCartItemsComponent},
    {path:'Orders',component:CustomerOrderedItemsComponent}
  ]},
  {path:"AdminDashboard",component:AdminDashboardComponent,canActivate:[AdminAuthGuard],children:[
    {path:'',redirectTo:'dishes',pathMatch:'full'},
    {path:"dishes",component:AllItemsComponent},
    {path:"chefs",component:AllChefsComponent},
    {path:"supervisors",component:AllSupervisorsComponent}
  ]},
  {path:"KitchenMasterDashboard",canActivate:[KitchenMasterAuthGuard],component:KitchenMasterDashboardComponent},
  {path:"SupervisorDashboard",canActivate:[SupervisorAuthGuard],component:SupervisorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
