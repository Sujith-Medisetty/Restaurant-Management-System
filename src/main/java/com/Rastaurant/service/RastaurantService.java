package com.Rastaurant.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Rastaurant.dao.AdminDao;
import com.Rastaurant.dao.CartDao;
import com.Rastaurant.dao.CustomerDao;
import com.Rastaurant.dao.ItemDao;
import com.Rastaurant.dao.KitchenMasterDao;
import com.Rastaurant.dao.OrdersDao;
import com.Rastaurant.dao.SupervisorDao;
import com.Rastaurant.dto.LoginHelper;
import com.Rastaurant.entity.Admin;
import com.Rastaurant.entity.Cart;
import com.Rastaurant.entity.Customer;
import com.Rastaurant.entity.Item;
import com.Rastaurant.entity.KitchenMaster;
import com.Rastaurant.entity.Orders;
import com.Rastaurant.entity.Supervisor;
import com.Rastaurant.entityInterface.EntityInterface;

@Service
public class RastaurantService {

	@Autowired
	private CustomerDao cdao;

	@Autowired
	private AdminDao adao;

	@Autowired
	private KitchenMasterDao kdao;

	@Autowired
	private SupervisorDao sdao;

	@Autowired
	private ItemDao idao;

	@Autowired
	private CartDao cartdao;

	@Autowired
	private OrdersDao ordersdao;

	public EntityInterface LoginService(LoginHelper loginHelper) {
		if (loginHelper.getRole().equals("customer")) {

			Customer customer = null;
			if (cdao.verifyCredentials(loginHelper.getEmail(), loginHelper.getPassword()) > 0) {
				customer = cdao.findById(loginHelper.getEmail()).orElse(null);
			}
			return customer;

		} else if (loginHelper.getRole().equals("kitchenMaster")) {

			KitchenMaster kitchenMaster = null;

			if (kdao.verifyCredentials(loginHelper.getEmail(), loginHelper.getPassword()) > 0) {
				kitchenMaster = kdao.findById(loginHelper.getEmail()).orElse(null);
			}
			return kitchenMaster;

		} else if (loginHelper.getRole().equals("admin")) {
			Admin admin = null;

			if (adao.verifyCredentials(loginHelper.getEmail(), loginHelper.getPassword()) > 0) {
				admin = adao.findById(loginHelper.getEmail()).orElse(null);
			}
			return admin;

		} else {
			Supervisor supervisor = null;

			if (sdao.verifyCredentials(loginHelper.getEmail(), loginHelper.getPassword()) > 0) {
				supervisor = sdao.findById(loginHelper.getEmail()).orElse(null);
			}
			return supervisor;

		}
	}

	public boolean addItem(Item item) {
		System.out.println("triggered");
		Item savedItem = idao.save(item);
		if (savedItem != null) {
			return true;
		}
		return false;
	}

	public List<Item> getItems() {
		return idao.findAll();
	}

	public boolean saveItem(Item item) {
		Item i = idao.save(item);
		if (i != null) {
			return true;
		}
		return false;
	}

	public boolean deleteItem(Item item) {
		idao.delete(item);
		return true;
	}

	public boolean addChef(KitchenMaster chef) {
		KitchenMaster master = kdao.save(chef);
		if (master != null) {
			return true;
		}
		return false;
	}

	public boolean saveChef(KitchenMaster chef) {
		KitchenMaster master = kdao.save(chef);
		if (master != null) {
			return true;
		}
		return false;
	}

	public List<KitchenMaster> getChefs() {
		List<KitchenMaster> chefs = kdao.findAll();
		System.out.println(chefs);
		return chefs;
	}

	public boolean deleteChef(String kemail) {
		kdao.deleteById(kemail);
		return true;
	}

	public boolean addSupervisor(Supervisor supervisor) {
		Supervisor superVisor = sdao.save(supervisor);
		if (superVisor != null) {
			return true;
		} else {
			return false;
		}
	}

	public List<Supervisor> getSupervisors() {
		List<Supervisor> supervisors = sdao.findAll();
		return supervisors;
	}

	public boolean saveSupervisor(Supervisor supervisor) {
		Supervisor superVisor = sdao.save(supervisor);
		if (superVisor != null) {
			return true;
		} else {
			return false;
		}
	}

	public boolean deleteSupervisor(String semail) {
		sdao.deleteById(semail);
		return true;
	}

	public void refreshItemCount(String cemail) {
		idao.updateIcount();
		List<Cart> cartList = cartdao.cartList(cemail);
		for (Cart cart : cartList) {
			idao.updateItemCount(cart.getIcount(), cart.getIid());
		}
	}

	public boolean increItemCount(int iid, String cemail) {

		if (cartdao.findByCemail(cemail, iid) > 0) {
			Cart cartitem = cartdao.getCartItem(cemail, iid);
			int icount = cartitem.getIcount() + 1;
			cartitem.setIcount(icount);
			cartdao.save(cartitem);
		} else {
			Cart cartitem = new Cart(cemail, new Date(System.currentTimeMillis()), iid, 1);
			cartdao.save(cartitem);
		}

		idao.updateIcount();
		List<Cart> cartList = cartdao.cartList(cemail);
		for (Cart cart : cartList) {
			idao.updateItemCount(cart.getIcount(), cart.getIid());
		}
		return true;

	}

	public boolean decreItemCount(int iid, String cemail) {

		if (cartdao.findByCemail(cemail, iid) > 0) {
			Cart cartitem = cartdao.getCartItem(cemail, iid);
			int icount = cartitem.getIcount() - 1;
			cartitem.setIcount(icount);
			cartdao.save(cartitem);
		}

		if (cartdao.findByCemailAndIidIcount(cemail, iid) == 0) {
			cartdao.deleteByCemailAndIid(cemail, iid);
		}

		idao.updateIcount();
		List<Cart> cartList = cartdao.cartList(cemail);
		for (Cart cart : cartList) {
			idao.updateItemCount(cart.getIcount(), cart.getIid());
		}
		return true;

	}

	public boolean addCustomer(Customer customer) {
		Customer cust = cdao.save(customer);
		if (cust != null) {
			return true;
		} else {
			return false;
		}
	}

	public boolean addOrders(Orders orders) {

		Orders ord = ordersdao.save(orders);
		if (ord != null) {
			return true;
		}
		return false;
	}

	public List<Orders> getOrders() {
		return ordersdao.findAllOrders();
	}
	
	public boolean orderServed(Orders product){
		int id=product.getOid();
		ordersdao.updateOrderStatus(id);
		return true;
	}
	
	public boolean solveProblem(Orders product){
		
		int id=product.getOid();
		String desc=product.getHelpdesc();
		ordersdao.solveHelpStatus(desc,id);
		return true;
		
	}
	
	public boolean problemResolved(Orders product) {
		int id=product.getOid();
		ordersdao.updateHelpStatus(id);
		return true;
	}

}
