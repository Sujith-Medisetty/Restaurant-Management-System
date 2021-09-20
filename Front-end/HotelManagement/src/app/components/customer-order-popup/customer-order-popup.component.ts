import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-order-popup',
  templateUrl: './customer-order-popup.component.html',
  styleUrls: ['./customer-order-popup.component.css']
})
export class CustomerOrderPopupComponent implements OnInit {

  constructor(private loginservice:LoginService,private itemservice:ItemsService,private http:HttpClient,private dialogRef:MatDialogRef<CustomerOrderPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) { }

  cartList:any=[]
  itemscost:any=0
  paymentmode:any;
  ngOnInit(): void {
    this.cartList=this.data.cartList
    for(let i=0;i<this.cartList.length;i++){
      this.itemscost=this.itemscost+(this.cartList[i].icount*this.cartList[i].icost)
    }
  }

  onsubmit(){
    console.log(this.paymentmode);

    this.itemservice.addOrders(this.cartList,this.paymentmode);
    this.snackbar.open("Order placed Successfully...!","Dismiss",{duration:4000});
    this.dialogRef.close();
    window.location.href="CustomerDashboard/Orders"
  }

  

}
