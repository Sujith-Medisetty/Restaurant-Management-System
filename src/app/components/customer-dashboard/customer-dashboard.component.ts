import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  cartcount:any;
  logged:any=localStorage.getItem("customerlogin")
  constructor(private itemserice:ItemsService) { }

  ngOnInit(): void {
    this.itemserice.getCartCountsObservable().subscribe(
      data=>{
        this.cartcount=data
      }
    )
  }

  logout(){
    localStorage.removeItem("customerlogin")
    window.location.href="/home";
  }

}
