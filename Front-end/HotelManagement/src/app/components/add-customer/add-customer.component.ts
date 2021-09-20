import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<AddCustomerComponent>,private loginservice:LoginService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsubmit(userform:NgForm){
    console.log(this.data.customerRegister);
    this.loginservice.registerCustomer(this.data.customerRegister).subscribe(
      data=>{
        console.log(data);
        this.snackbar.open(data,"Dismiss",{duration:4000})
      }
    )
    this.dialogRef.close();
      }

}
