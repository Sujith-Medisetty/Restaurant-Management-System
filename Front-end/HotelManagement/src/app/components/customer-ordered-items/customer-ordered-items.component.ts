import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';
import { HelpOrderPopupComponent } from '../help-order-popup/help-order-popup.component';

@Component({
  selector: 'app-customer-ordered-items',
  templateUrl: './customer-ordered-items.component.html',
  styleUrls: ['./customer-ordered-items.component.css']
})
export class CustomerOrderedItemsComponent implements OnInit {

  ordersList:any=[]
  resultData:any=[]
  total:any;
  constructor(private itemservice:ItemsService,public datepipe: DatePipe,private httpClient: HttpClient,private dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.itemservice.getAllOrders()
    this.itemservice.getOrdersObservable().subscribe(
      result=>{
        this.ordersList=result;
        let data = new Set(this.ordersList.map((item: { date: any; }) => this.datepipe.transform(item.date,'MMM d, y, h:mm:ss a')))
        this.resultData=[];
        data.forEach((date)=>{
            this.resultData.push({
                date: date, 
                products: this.ordersList.filter((i: { date: any; }) => this.datepipe.transform(i.date,'MMM d, y, h:mm:ss a') === date)
              })
        })
        console.log(this.resultData)
        this.total=this.resultData.length;
      }
    )


  }

  getEventValue($event:any) :string {
    console.log("calles");
    return $event.target.value;
  }

help(product:any){

  const dialogConfig=new MatDialogConfig();
  dialogConfig.autoFocus=false;
  dialogConfig.disableClose=false;
  dialogConfig.width="60%";
  dialogConfig.maxHeight= '80vh' 
  dialogConfig.data={product}
  let dialogref=this.dialog.open(HelpOrderPopupComponent,dialogConfig);
  dialogref.afterClosed().subscribe(
    result=>{
        console.log("entered in after close")
        this.itemservice.getAllOrders();
    }
   )

}




}
