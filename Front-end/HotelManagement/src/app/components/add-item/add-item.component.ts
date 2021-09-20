import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  selectedFile:any;
  message:any;

  constructor(private itemservice:ItemsService,private http:HttpClient,private dialogRef:MatDialogRef<AddItemComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

    //Gets called when the user selects an image
    public onFileChanged(event:any) {
      //Select File
      console.log("called")
      this.selectedFile = event.target.files[0];
    }



  onsubmit(form:NgForm){
    this.data.item.selectedFile=this.selectedFile;
    console.log(this.data.item);

        console.log("selected file is "+ this.selectedFile)
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadItemData = new FormData();
    uploadItemData.append('iname',this.data.item.iname);
    uploadItemData.append('idesc',this.data.item.idesc);
    uploadItemData.append('icost',this.data.item.icost);
    uploadItemData.append('selectedFile',this.data.item.selectedFile);
    uploadItemData.append('icategory',this.data.item.icategory);
    uploadItemData.append('iftype',this.data.item.iftype);
    uploadItemData.append('ift',this.data.item.ift);
    uploadItemData.append('icount',this.data.item.icount);

    this.itemservice.addItem(uploadItemData).subscribe((response) => {
      if (response.status === 200) {
        this.message = response.body;
        this.itemservice.getAllItems();
        this.snackbar.open(this.message,"Dismiss",{duration:4000})
        console.log(this.message)
      } else {
        this.message = response;
        this.itemservice.getAllItems();
        this.snackbar.open(this.message,"Dismiss",{duration:4000})
        console.log(this.message)
      }
    }
    );
  
    this.dialogRef.close();
  }

}
