package com.Rastaurant.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Rastaurant.dto.LoginHelper;
import com.Rastaurant.entity.Admin;
import com.Rastaurant.entity.Customer;
import com.Rastaurant.entity.Item;
import com.Rastaurant.entity.KitchenMaster;
import com.Rastaurant.entity.Orders;
import com.Rastaurant.entity.Supervisor;
import com.Rastaurant.service.RastaurantService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RastaurentController {

	byte[] files;
	
	@Autowired
	RastaurantService service;
	
	@RequestMapping(path="/customerlogin")
	public Customer CustomerLogin(@RequestBody LoginHelper loginHelper) {
		System.out.println(loginHelper);

		Customer customer=(Customer)service.LoginService(loginHelper);
		return customer;
		
		
	}
	
	@RequestMapping(path="/adminlogin")
	public Admin AdminLogin(@RequestBody LoginHelper loginHelper) {
		System.out.println(loginHelper);

		Admin admin=(Admin)service.LoginService(loginHelper);
		return admin;
		
	}
	
	@RequestMapping(path="/supervisorlogin")
	public Supervisor SupervisorLogin(@RequestBody LoginHelper loginHelper) {
		System.out.println(loginHelper);

		Supervisor supervisor=(Supervisor)service.LoginService(loginHelper);
		return supervisor;
		
	}
	
	@RequestMapping(path="/kitchenmasterlogin")
	public KitchenMaster KitchenMasterLogin(@RequestBody LoginHelper loginHelper) {
		System.out.println(loginHelper);

		KitchenMaster kitchenmaster=(KitchenMaster)service.LoginService(loginHelper);
		return kitchenmaster;
		
	}
	
	@RequestMapping(path = "addCustomer")
	public String addCustomer(@RequestBody Customer customer) {
		System.out.println(customer);
		boolean flag=service.addCustomer(customer);
		if(flag) {
			return "Customer Added Successfully...!";
		}else {
			return "Error while adding Customer";
		}
	}
	
	@RequestMapping(path = "addItem")
	public String addItem(@RequestParam("iname") String iname, @RequestParam("idesc") String idesc, @RequestParam("icost") String icost, @RequestParam("selectedFile") MultipartFile file, @RequestParam("iftype") String iftype, @RequestParam("ift") String ift, @RequestParam("icount") int icount) throws IOException {
		System.out.println(iname);
		System.out.println(idesc);
		System.out.println(icost);
		System.out.println(file);
		System.out.println(iftype);
		System.out.println(ift);
		System.out.println(icount);
		
		this.files=file.getBytes();
		
		Item item=new Item(iname,idesc,icost,file.getBytes(),iftype,ift,icount);
		boolean flag=service.addItem(item);
		if(flag){
			return "Item Added Successfully";
		}else {
			return "An error occured while saving the Item";
		}  
	}
	
	
	@RequestMapping(path = "getItems")
	public List<Item> getItems(){
		System.out.println(service.getItems().get(0).getPicByte());
		return service.getItems();
	}
	
	@RequestMapping(path = "saveItem")
	public String saveItem(@RequestBody Item item) {
		boolean flag=service.saveItem(item);
		if(flag) {
			return "Item Details Updated Successfully";
		}else {
			return "An error occured while saving the Item details";
		}
	}
	
	@RequestMapping(path = "deleteItem")
	public String deleteItem(@RequestBody Item item) {
		boolean flag=service.deleteItem(item);
		if(flag) {
			return "Item details deleted successfully";
		}else {
			return "Error while deleting Item details";
		}
	}
	
	@RequestMapping(path = "addChef")
	public String addChef(@RequestBody KitchenMaster chef) {
		boolean flag=service.addChef(chef);
		if(flag){
			return "Chef Added Successfully";
		}else {
			return "An error occured while saving the chef details";
		}
	}
	
	@RequestMapping(path = "saveChef")
	public String saveChef(@RequestBody KitchenMaster chef) {
		boolean flag=service.saveChef(chef);
		if(flag) {
			return "Chef Details Updated Successfully";
		}else {
			return "An error occured while saving the chef details";
		}
	}
	
	@GetMapping(path = "getChefs")
	public List<KitchenMaster> getChefs(){
		return service.getChefs();
	}
	
	@RequestMapping(path="deleteChef")
	public String deleteChef(@RequestBody String kemail) {
		boolean flag=service.deleteChef(kemail);
		if(flag) {
			return "Chef details deleted successfully";
		}else {
			return "Error while deleting chef details";
		}
	}
	
	@RequestMapping(path = "addSupervisor")
	public String addSupervisor(@RequestBody Supervisor supervisor) {
		boolean flag=service.addSupervisor(supervisor);
		if(flag){
			return "Supervisor Added Successfully";
		}else {
			return "An error occured while saving the supervisor details";
		}
	}
	
	@RequestMapping(path = "getSupervisors")
	public List<Supervisor> getSuperviors(){
		return service.getSupervisors();
	}
	
	@RequestMapping(path = "saveSupervisor")
	public String saveSupervisor(@RequestBody Supervisor supervisor) {
		boolean flag=service.saveSupervisor(supervisor);
		if(flag){
			return "Supervisor saved Successfully";
		}else {
			return "An error occured while saving the supervisor details";
		}
	}
	
	
	@RequestMapping(path = "deleteSupervisor")
	public String deleteSupervisor(@RequestBody String semail) {
		boolean flag=service.deleteSupervisor(semail);
		if(flag) {
			return "Supervisor details deleted successfully";
		}else {
			return "Error while deleting Supervisor details";
		}
	}
	
	
	@RequestMapping(path="increItemCount")
	public String increItemCount(@RequestParam("iid") int iid,@RequestParam("cemail") String cemail) {
		boolean flag=service.increItemCount(iid,cemail);
		if(flag) {
			return "Item added to cart Sucessfully...!";
		}else {
			return "Error while adding item to cart";
		}
	}
	
	@RequestMapping(path="decreItemCount")
	public String decreItemCount(@RequestParam("iid") int iid,@RequestParam("cemail") String cemail) {
		boolean flag=service.decreItemCount(iid,cemail);
		if(flag) {
			return "Item removed from cart successfully...!";
		}else {
			return "error while removing item from cart";
		}
	}
	
	@RequestMapping(path = "refreshIcount")
	public String RefreshIcount(@RequestBody String cemail) {
		service.refreshItemCount(cemail);
		return "Loading done...!";
	}

	@RequestMapping(path = "addOrders")
	public String addOrders(@RequestParam("iid") int iid,@RequestParam("iname") String iname,@RequestParam("selectedFile") byte[] picByte,@RequestParam("idesc") String idesc,@RequestParam("icost") String icost,@RequestParam("iftype") String iftype,@RequestParam("ift") String ift,@RequestParam("icount") int icount,@RequestParam("paymentmode") String paymentmode,@RequestParam("cemail") String cemail) throws IOException {
		
		System.out.println("called");
		
		System.out.println(iid);
		System.out.println(iname);
		System.out.println(idesc);
		System.out.println(icost);
		System.out.println(iftype);
		System.out.println(ift);
		System.out.println(icount);
		System.out.println(paymentmode);
		System.out.println(picByte);
		System.out.println(cemail);
		
		
		Orders orders=new Orders(iid,iname,idesc,icost,picByte,iftype,ift,icount,paymentmode,cemail,0,"",0,new Date(System.currentTimeMillis()));
		boolean flag=service.addOrders(orders);
		if(flag) {
			return "Order Placed Successfully";
		}
		return "no error...!";
	}
	
	@RequestMapping(path = "getOrders")
	public List<Orders> getOrders() {
		List<Orders> orders=service.getOrders();
		return orders;
	}
	
	@RequestMapping(path = "orderServed")
	public String orderServed(@RequestBody Orders product) {
		if(service.orderServed(product)) {
			return "Order Served";
		}
		return "Please wait for 5 min...u r order is preparing";
	
	}
	
	@RequestMapping(path = "solveProblem")
	public String solveProblem(@RequestBody Orders product) {
		if(service.solveProblem(product)) {
			return "Query Placed";
		}
		return "Query Not placed";
	}
	
	@RequestMapping(path = "problemResolved")
	public String problemResolved(@RequestBody Orders product) {
		if(service.problemResolved(product)) {
			return "Query Resolved";
		}
		return "Query not resolved";
	}
	
	
	
}
