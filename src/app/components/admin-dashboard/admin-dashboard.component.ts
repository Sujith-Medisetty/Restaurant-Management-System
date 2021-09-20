import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'src/app/models/item';
import { KitchenMaster } from 'src/app/models/kitchen-master';
import { Supervisor } from 'src/app/models/supervisor';
import { ItemsService } from 'src/app/services/items.service';
import { AddChefComponent } from '../add-chef/add-chef.component';
import { AddItemComponent } from '../add-item/add-item.component';
import { AddSupervisorComponent } from '../add-supervisor/add-supervisor.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  logged:any=localStorage.getItem("adminlogin")
  constructor(private itemservice:ItemsService,private httpClient: HttpClient,private dialog:MatDialog,private snackbar:MatSnackBar) { }

  selectedFile: any;
  message: any;

  itemsList:any=[]
  chefsList=[];
  supervisorList=[];


  ngOnInit(){
    // this.getItems();
    // this.snackbar.open("only Lunch available ","Dismiss", {
    //   horizontalPosition: "right",
    //   verticalPosition: "bottom",
    // })

    this.itemservice.getAllItems();
    this.itemservice.getAllChefs();
    this.itemservice.getAllSupervisors();

    this.itemservice.getProducts().subscribe(
      data=>this.itemsList=data
    )
    this.itemservice.getChefsObservable().subscribe(
      data=>{
        this.chefsList=data;
      }
    )
    this.itemservice.getSupervisorObservable().subscribe(
      data=>{
        this.supervisorList=data;
      }
    )
  }


  addDish(){
    var item= new Item("","","","","","",0);
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=false;
    dialogConfig.disableClose=false;
    dialogConfig.width="60%";
    dialogConfig.maxHeight= '80vh' 
    dialogConfig.data={item}
    let dialogref=this.dialog.open(AddItemComponent,dialogConfig);
    dialogref.afterClosed().subscribe(
      result=>{
          console.log("entered")
          this.itemservice.getAllItems();
      }
     )
  }

  addChef(){
    var kitchenMaster=new KitchenMaster("","","","");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=false;
    dialogConfig.disableClose=false;
    dialogConfig.width="60%";
    dialogConfig.maxHeight= '80vh' 
    dialogConfig.data={kitchenMaster}
    let dialogref=this.dialog.open(AddChefComponent,dialogConfig);
    dialogref.afterClosed().subscribe(
      result=>{
          console.log("entered in after close")
          this.itemservice.getAllChefs();
      }
     )
  }

  addSupervisor(){
    var supervisor=new Supervisor("","","","");
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=false;
    dialogConfig.disableClose=false;
    dialogConfig.width="60%";
    dialogConfig.maxHeight= '80vh' 
    dialogConfig.data={supervisor}
    let dialogref=this.dialog.open(AddSupervisorComponent,dialogConfig);
    dialogref.afterClosed().subscribe(
      result=>{
          console.log("entered in after close")
          this.itemservice.getAllSupervisors();
      }
     )
  }

  logout(){
    localStorage.removeItem("adminlogin")
    window.location.href="/home";
  }

}


