import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-all-supervisors',
  templateUrl: './all-supervisors.component.html',
  styleUrls: ['./all-supervisors.component.css']
})
export class AllSupervisorsComponent implements OnInit {

  supervisors:any=[];

  constructor(private itemservice:ItemsService,private snackbar:MatSnackBar) { }
ngOnInit(){
  
  this.itemservice.getAllSupervisors();
  this.itemservice.getSupervisorObservable().subscribe(
    data=>{
      console.log("in all supervisors data");
      console.log(data);
      this.supervisors=data;
    }
  )
}

onRowEditInit(product: any) {
  this.snackbar.open("Now u can update chef details","Dismiss",{duration:3000});
}

onRowEditSave(product: any) {
  console.log("save chef called")
  this.itemservice.saveSupervisors(product).subscribe(
    data=>{
      this.itemservice.getAllSupervisors();
      this.snackbar.open(data,"Dismiss",{duration:4000});
    }
  )
}

onRowEditCancel(product: any, index: number) {
  this.snackbar.open("OOPS...! Chef details are not updated","Dismiss",{duration:4000});
}

delete(row:any){
  console.log(row);
  this.itemservice.deleteSupervisor(row).subscribe(
    data=>{
      this.itemservice.getAllSupervisors();
      this.snackbar.open(data,"Dismiss",{duration:2000})
    }
  )
}

getEventValue($event:any) :string {
  console.log("calles");
  return $event.target.value;
} 

}
