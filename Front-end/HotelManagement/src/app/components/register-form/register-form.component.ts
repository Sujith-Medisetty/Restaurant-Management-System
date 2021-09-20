import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<RegisterFormComponent>) { }

  ngOnInit(): void {
  }

  onsubmit(userform:NgForm){
console.log("registration success...!");
this.dialogRef.close();
  }

}
