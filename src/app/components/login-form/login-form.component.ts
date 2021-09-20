import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<LoginFormComponent>,private loginService:LoginService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm){

    if(this.data.login.role==="customer"){
      
    this.loginService.customerLogin(this.data.login).subscribe(
      result=>{
        console.log(result);
        if(result!=null){
          window.location.href="/CustomerDashboard";
          this.snackbar.open("LOGIN SUCCESS","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
          localStorage.setItem("customerlogin",result.cemail);
          console.log("login success")
        }else{
          this.snackbar.open("INVALID USER-ID or PASSWORD","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
          console.log("result is null")
        }
        
      }
    )

    }else if(this.data.login.role==="kitchenMaster"){

          this.loginService.kitchenMasterLogin(this.data.login).subscribe(
      result=>{
        console.log(result);
        if(result!=null){
          window.location.href="/KitchenMasterDashboard";
          this.snackbar.open("LOGIN SUCCESS","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
          localStorage.setItem("kitchenmasterlogin",result.kemail);
          console.log("login success")
        }else{
          this.snackbar.open("INVALID USER-ID or PASSWORD","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
          console.log("result is null")
        }
        
      }
    )

    }else if(this.data.login.role==="admin"){

      this.loginService.adminLogin(this.data.login).subscribe(
        result=>{
          console.log(result);
          if(result!=null){
            window.location.href="/AdminDashboard";
            this.snackbar.open("LOGIN SUCCESS","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
            localStorage.setItem("adminlogin",result.aemail);
            console.log("login success")
          }else{
            this.snackbar.open("INVALID USER-ID or PASSWORD","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
            console.log("result is null")
          }
          
        }
      )
      
    }else{

      this.loginService.supervisorLogin(this.data.login).subscribe(
        result=>{
          console.log(result);
          if(result!=null){
            window.location.href="/SupervisorDashboard";
            this.snackbar.open("LOGIN SUCCESS","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
            localStorage.setItem("supervisorlogin",result.semail);
            console.log("login success")
          }else{
            this.snackbar.open("INVALID USER-ID or PASSWORD","Dismiss",{duration:4000,panelClass: ['blue-snackbar']})
            console.log("result is null")
          }
          
        }
      )

    }

    this.dialogRef.close();
  }

}
