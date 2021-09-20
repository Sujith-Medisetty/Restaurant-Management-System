import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KitchenMaster } from '../models/kitchen-master';
import { Supervisor } from '../models/supervisor';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  getchefsURI="http://localhost:8080/getChefs";
  saveChefURI="http://localhost:8080/saveChef";

  getSupervisorsURI="http://localhost:8080/getSupervisors";
  public AllItemList:any=[];
  public ItemList=new BehaviorSubject<any>([]);
  public ChefList=new BehaviorSubject<any>([]);
  public SupervisorsList=new BehaviorSubject<any>([]);

  public CartCount=new BehaviorSubject<any>(0);

  constructor(private http:HttpClient,private login:LoginService) { }

  refreshIcount(cemail:any){
    return this.http.post<any>('http://localhost:8080/refreshIcount',cemail,{responseType: 'text' as 'json'})
  }
  
  getProducts(){
    
    return this.ItemList.asObservable();
  }

  addItem(uploadItemData:any){
            //Make a call to the Spring Boot Application to save the image
            console.log(uploadItemData)
           return this.http.post('http://localhost:8080/addItem', uploadItemData, { observe: 'response' ,responseType: 'text' as 'json'})
  }


  getItems(){
    return this.http.get("http://localhost:8080/getItems");
  }

  getAllItems(){
    this.getItems().subscribe(
       data=>{
         console.log("in subscripbe 1")
         console.log(data)
        this.AllItemList=data
        this.ItemList.next(data)
       }
    )
  }


  editItem(uploadItemData:any){
    return this.http.post<any>("http://localhost:8080/saveItem",uploadItemData,{ observe: 'response' ,responseType:'text' as 'json'})
  }

  deleteItem(item:any){
    return this.http.post<any>("http://localhost:8080/deleteItem",item,{responseType:'text' as 'json'})
  }

  getChefsObservable(){
    return this.ChefList.asObservable();
  }


  getAllChefs(){
    this.getChefs().subscribe(
      data=>{
        console.log("yes in getallchefs")
        this.ChefList.next(data);
      }
    )
  } 

  getChefs(){
    return this.http.get<any>(this.getchefsURI);
  }

  saveChef(chef:KitchenMaster){
    return this.http.post<any>(this.saveChefURI,chef,{responseType:'text' as 'json'});
  }
  
  deleteChef(kemail:any){
    return this.http.post<any>("http://localhost:8080/deleteChef",kemail,{responseType:'text' as 'json'})
  }

  getSupervisors(){
    return this.http.get<any>(this.getSupervisorsURI);
  }

  getAllSupervisors(){
    this.getSupervisors().subscribe(
      data=>{
        this.SupervisorsList.next(data)
      }
    )
  }

  getSupervisorObservable(){
    return this.SupervisorsList.asObservable();
  }

  saveSupervisors(supervisor:Supervisor){
    return this.http.post<any>("http://localhost:8080/saveSupervisor",supervisor,{responseType:'text' as 'json'});
  }

  deleteSupervisor(semail:any){
    return this.http.post<any>("http://localhost:8080/deleteSupervisor",semail,{responseType:'text' as 'json'})
  }


  increItemCount(iid:any){

    const cemail=localStorage.getItem("customerlogin")

    const data = new FormData();
    data.append('iid',iid);
    data.append('cemail',cemail as string);

    return this.http.post<any>("http://localhost:8080/increItemCount",data,{responseType:'text' as 'json'});
  }

  decreItemCount(iid:any){

    const cemail=localStorage.getItem("customerlogin")

    const data = new FormData();
    data.append('iid',iid);
    data.append('cemail',cemail as string);

    return this.http.post<any>("http://localhost:8080/decreItemCount",data,{responseType:'text' as 'json'});
  }


  getCartCountsObservable(){
    let cartcount;
    this.getAllItems();
    this.getProducts().subscribe(
      data=>{
        cartcount=0;
        for(let i=0;i<data.length;i++){
          if(data[i].icount!=0){
            cartcount=cartcount+data[i].icount
          }
          this.CartCount.next(cartcount)
        }
      }
    )

    return this.CartCount.asObservable();
  }

  addOrders(cartList:any,paymentmode:any){
    console.log(cartList);
    for(let i=0;i<cartList.length;i++){
      console.log("called");
      const uploadItemDat = new FormData();
      uploadItemDat.append('iname',cartList[i].iname);
      uploadItemDat.append('iid',cartList[i].iid);
      uploadItemDat.append('idesc',cartList[i].idesc);
      uploadItemDat.append('icost',cartList[i].icost);
      uploadItemDat.append('iftype',cartList[i].iftype);
      uploadItemDat.append('ift',cartList[i].ift);
      uploadItemDat.append('icount',cartList[i].icount);
      uploadItemDat.append('selectedFile',cartList[i].picByte);
      uploadItemDat.append('paymentmode',paymentmode);
      uploadItemDat.append('cemail',localStorage.getItem("customerlogin") as string);

      this.http.post('http://localhost:8080/addOrders', uploadItemDat,{responseType:'text' as 'json'}).subscribe(
        data=>{
         
        }
      )
    }
  }

  public OrdersList=new BehaviorSubject<any>([]);
  

  getOrders(){
    return this.http.get<any>("http://localhost:8080/getOrders");
  }

  getOrdersObservable(){
    return this.OrdersList.asObservable();
  }

  getAllOrders(){
    this.getOrders().subscribe(
      data=>{
        this.OrdersList.next(data)
      }
    )
  }



  orderServed(product:any){
    return this.http.post<any>("http://localhost:8080/orderServed",product,{responseType:'text' as 'json'});
  }

  problemResolved(product:any){
    return this.http.post<any>("http://localhost:8080/problemResolved",product,{responseType:'text' as 'json'})
  }


  solveProblem(product:any){
    return this.http.post<any>("http://localhost:8080/solveProblem",product,{responseType:'text' as 'json'})
  }

}
