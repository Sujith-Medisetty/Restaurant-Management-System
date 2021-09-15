package com.Rastaurant.service;

import static org.junit.Assert.fail;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.Rastaurant.entity.Item;
import com.Rastaurant.entity.KitchenMaster;
import com.Rastaurant.entity.Orders;
import com.Rastaurant.entity.Supervisor;

public class RastaurantServiceTest {

	@Autowired
	RastaurantService service;
	
	@Before
	public void setUp() throws Exception {
		
	}

	@After
	public void tearDown() throws Exception {
		service=null;
	}


	@Test
	public void testGetItems() {
		List<Item> items=service.getItems();
		System.out.println("entered");
		assert items!=null:"items present";
	}


	@Test
	public void testGetChefs() {
		List<KitchenMaster> chefs=service.getChefs();
		assert chefs!=null:"chefs present";
	}


	@Test
	public void testGetSupervisors() {
		List<Supervisor> supervisors=service.getSupervisors();
		assert supervisors!=null:"supervisors present";
	}

	@Test
	public void testGetOrders() {
		List<Orders> orders=service.getOrders();
		assert orders!=null:"orders present";
	}

}
