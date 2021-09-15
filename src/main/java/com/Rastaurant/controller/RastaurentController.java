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
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RastaurentController {


	private Logger logger = LogManager.getLogger(RastaurentController.class);
	
	@Autowired
	RastaurantService service;
	
	@RequestMapping(path="/customerlogin")
	public Customer CustomerLogin(@RequestBody LoginHelper loginHelper) {
		
		logger.info("customer logged in");
		
		System.out.println(loginHelper);

		Customer customer=(Customer)service.LoginService(loginHelper);
		return customer;
		
		
	}
	
	@RequestMapping(path="/adminlogin")
	public Admin AdminLogin(@RequestBody LoginHelper loginHelper) {
		
		logger.info("admin loggged in");
		
		System.out.println(loginHelper);

		Admin admin=(Admin)service.LoginService(loginHelper);
		return admin;
		
	}
	
	@RequestMapping(path="/supervisorlogin")
	public Supervisor SupervisorLogin(@RequestBody LoginHelper loginHelper) {
		
		logger.info("supervisor logged in");
		
		System.out.println(loginHelper);

		Supervisor supervisor=(Supervisor)service.LoginService(loginHelper);
		return supervisor;
		
	}
	
	@RequestMapping(path="/kitchenmasterlogin")
	public KitchenMaster KitchenMasterLogin(@RequestBody LoginHelper loginHelper) {
		
		logger.info("chef logged in");
		
		System.out.println(loginHelper);

		KitchenMaster kitchenmaster=(KitchenMaster)service.LoginService(loginHelper);
		return kitchenmaster;
		
	}
	
	@RequestMapping(path = "addCustomer")
	public String addCustomer(@RequestBody Customer customer) {
		
		System.out.println(customer);
		boolean flag=service.addCustomer(customer);
		if(flag) {
			logger.info("customer added successfully");
			return "Customer Added Successfully...!";
		}else {
			logger.info("Error while adding Customer");
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
		
		
		
		Item item=new Item(iname,idesc,icost,file.getBytes(),iftype,ift,icount);
		boolean flag=service.addItem(item);
		if(flag){
			logger.info("Item Added Successfully");
			return "Item Added Successfully";
		}else {
			logger.info("An error occured while saving the Item");
			return "An error occured while saving the Item";
		}  
	}
	
	
	@RequestMapping(path = "getItems")
	public List<Item> getItems(){
		logger.info("items fetched successfully");
		System.out.println(service.getItems().get(0).getPicByte());
		return service.getItems();
	}
	
	@RequestMapping(path = "saveItem")
	public String saveItem(@RequestBody Item item) {
		boolean flag=service.saveItem(item);
		if(flag) {
			logger.info("Item Details Updated Successfully");
			return "Item Details Updated Successfully";
		}else {
			logger.info("An error occured while saving the Item details");
			return "An error occured while saving the Item details";
		}
	}
	
	@RequestMapping(path = "deleteItem")
	public String deleteItem(@RequestBody Item item) {
		boolean flag=service.deleteItem(item);
		if(flag) {
			logger.info("Item details deleted successfully");
			return "Item details deleted successfully";
		}else {
			logger.info("Error while deleting Item details");
			return "Error while deleting Item details";
		}
	}
	
	@RequestMapping(path = "addChef")
	public String addChef(@RequestBody KitchenMaster chef) {
		boolean flag=service.addChef(chef);
		if(flag){
			logger.info("Chef Added Successfully");
			return "Chef Added Successfully";
		}else {
			logger.info("An error occured while saving the chef details");
			return "An error occured while saving the chef details";
		}
	}
	
	@RequestMapping(path = "saveChef")
	public String saveChef(@RequestBody KitchenMaster chef) {
		boolean flag=service.saveChef(chef);
		if(flag) {
			logger.info("Chef Details Updated Successfully");
			return "Chef Details Updated Successfully";
		}else {
			logger.info("An error occured while saving the chef details");
			return "An error occured while saving the chef details";
		}
	}
	
	@GetMapping(path = "getChefs")
	public List<KitchenMaster> getChefs(){
		logger.info("chefs fetched successfully");
		return service.getChefs();
	}
	
	@RequestMapping(path="deleteChef")
	public String deleteChef(@RequestBody String kemail) {
		boolean flag=service.deleteChef(kemail);
		if(flag) {
			logger.info("Chef details deleted successfully");
			return "Chef details deleted successfully";
		}else {
			logger.info("Error while deleting chef details");
			return "Error while deleting chef details";
		}
	}
	
	@RequestMapping(path = "addSupervisor")
	public String addSupervisor(@RequestBody Supervisor supervisor) {
		boolean flag=service.addSupervisor(supervisor);
		if(flag){
			logger.info("Supervisor Added Successfully");
			return "Supervisor Added Successfully";
		}else {
			logger.info("An error occured while saving the supervisor details");
			return "An error occured while saving the supervisor details";
		}
	}
	
	@RequestMapping(path = "getSupervisors")
	public List<Supervisor> getSuperviors(){
		logger.info("fetched supervisors successfully");
		return service.getSupervisors();
	}
	
	@RequestMapping(path = "saveSupervisor")
	public String saveSupervisor(@RequestBody Supervisor supervisor) {
		boolean flag=service.saveSupervisor(supervisor);
		if(flag){
			logger.info("Supervisor saved Successfully");
			return "Supervisor saved Successfully";
		}else {
			logger.info("An error occured while saving the supervisor details");
			return "An error occured while saving the supervisor details";
		}
	}
	
	
	@RequestMapping(path = "deleteSupervisor")
	public String deleteSupervisor(@RequestBody String semail) {
		boolean flag=service.deleteSupervisor(semail);
		if(flag) {
			logger.info("Supervisor details deleted successfully");
			return "Supervisor details deleted successfully";
		}else {
			logger.info("Error while deleting Supervisor details");
			return "Error while deleting Supervisor details";
		}
	}
	
	
	@RequestMapping(path="increItemCount")
	public String increItemCount(@RequestParam("iid") int iid,@RequestParam("cemail") String cemail) {
		boolean flag=service.increItemCount(iid,cemail);
		if(flag) {
			logger.info("Item added to cart Sucessfully...!");
			return "Item added to cart Sucessfully...!";
		}else {
			logger.info("Error while adding item to cart");
			return "Error while adding item to cart";
		}
	}
	
	@RequestMapping(path="decreItemCount")
	public String decreItemCount(@RequestParam("iid") int iid,@RequestParam("cemail") String cemail) {
		boolean flag=service.decreItemCount(iid,cemail);
		if(flag) {
			logger.info("Item removed from cart successfully...!");
			return "Item removed from cart successfully...!";
		}else {
			logger.info("error while removing item from cart");
			return "error while removing item from cart";
		}
	}
	
	@RequestMapping(path = "refreshIcount")
	public String RefreshIcount(@RequestBody String cemail) {
		service.refreshItemCount(cemail);
		logger.info("Loading done...!");
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
			logger.info("Order Placed Successfully");
			return "Order Placed Successfully";
		}
		logger.info("no error ...!");
		return "no error...!";
	}
	
	@RequestMapping(path = "getOrders")
	public List<Orders> getOrders() {
		logger.info("orders fetched successfully");
		List<Orders> orders=service.getOrders();
		return orders;
	}
	
	@RequestMapping(path = "orderServed")
	public String orderServed(@RequestBody Orders product) {
		if(service.orderServed(product)) {
			logger.info("Orders served");
			return "Order Served";
		}
		logger.info("Please wait for 5 min...u r order is preparing");
		return "Please wait for 5 min...u r order is preparing";
	
	}
	
	@RequestMapping(path = "solveProblem")
	public String solveProblem(@RequestBody Orders product) {
		if(service.solveProblem(product)) {
			logger.info("Query Placed");
			return "Query Placed";
		}
		logger.info("Query Not Placed");
		return "Query Not placed";
	}
	
	@RequestMapping(path = "problemResolved")
	public String problemResolved(@RequestBody Orders product) {
		if(service.problemResolved(product)) {
			logger.info("Query Resolved");
			return "Query Resolved";
		}
		logger.info("Query Not Resolved");
		return "Query not resolved";
	}
	
	
	
}
