import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.css']
})
export class AddSupervisorComponent implements OnInit {

  constructor(private loginservice:LoginService,private itemservice:ItemsService,private http:HttpClient,private dialogRef:MatDialogRef<AddSupervisorComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsubmit(){

    console.log(this.data.supervisor);
    this.loginservice.registerSupervisor(this.data.supervisor).subscribe(
      data=>{
        console.log(data);
        this.itemservice.getAllSupervisors();
        this.snackbar.open(data,"Dismiss",{duration:4000})
      }
    )
    this.dialogRef.close();
  }

}
