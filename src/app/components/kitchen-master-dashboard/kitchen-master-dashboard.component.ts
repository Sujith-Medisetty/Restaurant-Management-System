import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-kitchen-master-dashboard',
  templateUrl: './kitchen-master-dashboard.component.html',
  styleUrls: ['./kitchen-master-dashboard.component.css']
})
export class KitchenMasterDashboardComponent implements OnInit {

  orders:any=[]
  pending:any=[]
  login:any=localStorage.getItem("kitchenmasterlogin");
  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.itemservice.getAllOrders();
    this.itemservice.getOrdersObservable().subscribe(
      data=>{
        console.log("yes")
        this.orders=data
        this.pending=[]
        for(let i=0;i<this.orders.length;i++){
          if(this.orders[i].orderstatus==0){
            this.pending.push(this.orders[i])
          }
        }
        console.log(this.pending)
      }
    )
  }

  getEventValue($event:any) :string {
    console.log("calles");
    return $event.target.value;
  } 

  serve(product:any){
    this.itemservice.orderServed(product).subscribe(
      data=>{
        this.snackbar.open(data,"Dismiss",{duration:4000})
        this.itemservice.getAllOrders()
      }
    )
  }

  logout(){
    localStorage.removeItem("kitchenmasterlogin");
    window.location.href="/home";
  }

}
