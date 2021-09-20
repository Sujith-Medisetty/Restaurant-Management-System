import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Login } from 'src/app/models/login';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Register } from 'src/app/models/register';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Customer } from 'src/app/models/customer';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Restaurent';
  scrolled=false;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop >50 || document.documentElement.scrollTop >50){
      this.scrolled=true
    }else{
      this.scrolled=false
    }
  }

  customerLogin(){
    var login=new Login("","","customer");
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=false
    dialogconfig.disableClose=false
    dialogconfig.width="40%";
    dialogconfig.data={login};
    let dialogref=this.dialog.open(LoginFormComponent,dialogconfig);
  }

  kitchenMasterLogin(){
    var login=new Login("","","kitchenMaster");
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=false
    dialogconfig.disableClose=false
    dialogconfig.width="40%";
    dialogconfig.data={login};
    let dialogref=this.dialog.open(LoginFormComponent,dialogconfig);
  }

  superUserLogin(){
    var login=new Login("","","supervisor");
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=false
    dialogconfig.disableClose=false
    dialogconfig.width="40%";
    dialogconfig.data={login};
    let dialogref=this.dialog.open(LoginFormComponent,dialogconfig);
  }

  adminLogin(){
    var login=new Login("","","admin");
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=false
    dialogconfig.disableClose=false
    dialogconfig.width="40%";
    dialogconfig.data={login};
    let dialogref=this.dialog.open(LoginFormComponent,dialogconfig);
  }

  customerRegister(){
    var customerRegister=new Customer("","","","");
    const dialogconfig=new MatDialogConfig();
    dialogconfig.autoFocus=false
    dialogconfig.disableClose=false
    dialogconfig.width="50%";
    dialogconfig.data={customerRegister};
    let dialogref=this.dialog.open(AddCustomerComponent,dialogconfig);
  }



}
