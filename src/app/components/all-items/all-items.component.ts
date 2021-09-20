import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditItemComponent } from 'src/app/edit-item/edit-item.component';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  AllItems:any=[]
  constructor(private itemService:ItemsService,private snackbar:MatSnackBar,private httpClient: HttpClient,private dialog:MatDialog,) { }

  ngOnInit(): void {
    this.itemService.getAllItems();
    this.itemService.getProducts().subscribe(
      data=>{
        console.log(data)
        this.AllItems=data
      }
    )
}

deleteItem(item:any){
console.log("delete")
this.itemService.deleteItem(item).subscribe(
  data=>{
    this.itemService.getAllItems();
    this.snackbar.open(data,"Dismiss",{duration:3000})
  }
)
}

editItem(item:any){
console.log("edit")
const dialogConfig=new MatDialogConfig();
dialogConfig.autoFocus=false;
dialogConfig.disableClose=false;
dialogConfig.width="60%";
dialogConfig.maxHeight= '80vh' 
dialogConfig.data={item}
let dialogref=this.dialog.open(EditItemComponent,dialogConfig);
dialogref.afterClosed().subscribe(
  result=>{
      console.log("entered")
      this.itemService.getAllItems();
  }
 )
}


}
