import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import {CarouselModule} from 'primeng/carousel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-customer-all-items',
  templateUrl: './customer-all-items.component.html',
  styleUrls: ['./customer-all-items.component.css']
})
export class CustomerAllItemsComponent implements OnInit {

  itemsList:any=[]

  cartList:any=[]


  responsiveOptions:any;

  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar) { 

  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 2
    }
];
}

SpecialUrls:any=[{"img":"https://online.kfc.co.in/Content/OnlineOrderingImages/Menu/Items/KFC-Favorites.jpg?v=16.03","name":"Chicken Zinger & 4pc Hot Wings"},{"img":"https://i.pinimg.com/236x/94/1f/71/941f71b4e67574d7f9ff20b0cdbd589d.jpg","name":"Keto Egg Roll Noodle Bowl"},{"img":"https://i.pinimg.com/236x/84/d8/43/84d843cd4f5a9e791eb54035befac5a9.jpg","name":"Special Hyderabadi Biryani"},{"img":"https://i.pinimg.com/236x/59/fd/86/59fd860bd659419fa1159974ea858e5a.jpg","name":"Crispy Chicken bucket"},{"img":"https://i.pinimg.com/236x/1c/07/6f/1c076f3e7c94ea076f5fd02b0c2c530a.jpg","name":"Paneer Manchuria"},{"img":"https://i.pinimg.com/564x/5e/12/bf/5e12bf4261347a5f695b538396e56d9d.jpg","name":"Papadams Special Roti"},{"img":"https://i.pinimg.com/236x/0b/5c/d7/0b5cd789ab85731ac310f30fc4532071.jpg","name":"Special Combo for 2 or 3 people"}];

  ngOnInit(): void {
    this.itemservice.refreshIcount(localStorage.getItem("customerlogin")).subscribe(
      data=>{
        this.itemservice.getAllItems();
        this.itemservice.getProducts().subscribe(
          data=>{
            console.log(data)
            this.itemsList=data;
            this.cartList=[]
            for(let i=0;i<this.itemsList.length;i++){
              if(this.itemsList[i].icount!=0){
                this.cartList.push(this.itemsList[i])
              }
            }
          }
        )
        console.log(data)
      }
    )
  }

  count=0;

incre(iid:any){
  this.itemservice.increItemCount(iid).subscribe(
    data=>{
      this.itemservice.getAllItems();
      this.snackbar.open(data,"Dismiss",{duration:3000})
    }
  );
}

decre(iid:any){
  this.itemservice.decreItemCount(iid).subscribe(
    data=>{
      this.itemservice.getAllItems();
      this.snackbar.open(data,"Dismiss",{duration:3000})
    }
  );
}


}
