import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-all-chefs',
  templateUrl: './all-chefs.component.html',
  styleUrls: ['./all-chefs.component.css']
})
export class AllChefsComponent implements OnInit {

  chefs:any=[];
  colors:any;


  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.itemservice.getAllChefs();
    this.itemservice.getChefsObservable().subscribe(
      data=>{
        console.log("in all chefs data");
        console.log(data);
        this.chefs=data;
      }
    )
    this.getRandomColor();
  }
  
  
  getRandomColor() {
         let letters = '0123456789ABCDEF';
         var color="#";
          color += letters[Math.floor(Math.random() * 16)];
          this.colors="green";
          setInterval(()=>{
            this.colors= color;
          },1);

      }

      getEventValue($event:any) :string {
        console.log("calles");
        return $event.target.value;
      } 
  
      onRowEditInit(product: any) {
        this.snackbar.open("Now u can update chef details","Dismiss",{duration:3000});
      }
  
      onRowEditSave(product: any) {
        console.log("save chef called")
        this.itemservice.saveChef(product).subscribe(
          data=>{
            this.itemservice.getAllChefs();
            this.snackbar.open(data,"Dismiss",{duration:4000});
          }
        )
      }
  
      onRowEditCancel(product: any, index: number) {
        this.snackbar.open("OOPS...! Chef details are not updated","Dismiss",{duration:4000});
      }

      delete(row:any){
        console.log(row);
        this.itemservice.deleteChef(row).subscribe(
          data=>{
            this.itemservice.getAllChefs();
            this.snackbar.open(data,"Dismiss",{duration:2000})
          }
        )
     }
     
}
