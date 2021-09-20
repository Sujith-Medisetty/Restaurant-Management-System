import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  orders:any=[]
  pending:any=[]
  login:any=localStorage.getItem("supervisorlogin");
  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.itemservice.getAllOrders();
    this.itemservice.getOrdersObservable().subscribe(
      data=>{
        console.log("yes")
        this.orders=data
        this.pending=[]
        for(let i=0;i<this.orders.length;i++){
          if(this.orders[i].helpstatus==1){
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

  problemSolved(product:any){
    this.itemservice.problemResolved(product).subscribe(
      data=>{
        this.snackbar.open(data,"Dismiss",{duration:4000})
        this.itemservice.getAllOrders()
      }
    )
  }

logout(){
  localStorage.removeItem("supervisorlogin");
  window.location.href="/home"
}
  
}
