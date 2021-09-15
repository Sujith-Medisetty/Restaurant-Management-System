package com.Rastaurant.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer, String>{

	@Query(value="select count(*) from Customer c where c.cemail=?1 and c.cpassword=?2",nativeQuery = true)
	int verifyCredentials(String email,String password);
	
}
