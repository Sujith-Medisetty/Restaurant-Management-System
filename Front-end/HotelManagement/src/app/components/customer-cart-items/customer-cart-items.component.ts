import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';
import { CustomerAllItemsComponent } from '../customer-all-items/customer-all-items.component';
import { CustomerOrderPopupComponent } from '../customer-order-popup/customer-order-popup.component';

@Component({
  selector: 'app-customer-cart-items',
  templateUrl: './customer-cart-items.component.html',
  styleUrls: ['./customer-cart-items.component.css']
})
export class CustomerCartItemsComponent implements OnInit {

  itemsList:any=[]
  cartList:any=[]
  cartcount:any=0;
  itemscost:any=0;

  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.itemservice.refreshIcount(localStorage.getItem("customerlogin")).subscribe(
      data=>{
        this.itemservice.getAllItems();
        this.itemservice.getProducts().subscribe(
          data=>{
            console.log(data)
            this.itemsList=data;
            this.cartList=[]
            this.cartcount=0;
            this.itemscost=0
            for(let i=0;i<this.itemsList.length;i++){
              if(this.itemsList[i].icount!=0){
                this.itemscost=this.itemscost+this.itemsList[i].icount*this.itemsList[i].icost
                this.cartcount=this.cartcount+this.itemsList[i].icount
                this.cartList.push(this.itemsList[i])
              }
              this.itemservice.CartCount.next(this.cartcount)
            }

          }
        )
      }
    )

  }

  getEventValue($event:any) :string {
    console.log("calles");
    return $event.target.value;
  }

  incre(iid:any){
    this.itemservice.increItemCount(iid).subscribe(
      data=>{
        this.itemservice.getAllItems();

        this.snackbar.open(data,"Dismiss",{duration:3000,panelClass:['snackbarconfig']})
      }
    );
  }
  
  decre(iid:any){
    this.itemservice.decreItemCount(iid).subscribe(
      data=>{
        this.itemservice.getAllItems();

        this.snackbar.open(data,"Dismiss",{duration:3000,panelClass:['snackbarconfig']})
      }
    );
  }

  order(){
    let cartList=this.cartList
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=false;
    dialogConfig.disableClose=false;
    dialogConfig.width="60%";
    dialogConfig.maxHeight= '80vh' 
    dialogConfig.data={cartList}
    let dialogref=this.dialog.open(CustomerOrderPopupComponent,dialogConfig);
    dialogref.afterClosed().subscribe(
      result=>{
          
      }
     )
  }

}
