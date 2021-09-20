import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-help-order-popup',
  templateUrl: './help-order-popup.component.html',
  styleUrls: ['./help-order-popup.component.css']
})
export class HelpOrderPopupComponent implements OnInit {

  problem12:any;
  constructor(private loginservice:LoginService,private itemservice:ItemsService,private http:HttpClient,private dialogRef:MatDialogRef<HelpOrderPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.data.product.helpdesc=this.problem12;
    this.itemservice.solveProblem(this.data.product).subscribe(
      data=>{
        this.snackbar.open("Problem submitted...","Dismiss",{duration:4000})
      }
    )
  this.dialogRef.close()
  }

}
