package com.Rastaurant.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.Admin;

public interface AdminDao extends JpaRepository<Admin, String>{

	@Query(value="select count(*) from admin a where a.aemail=?1 and a.apassword=?2",nativeQuery = true)
	int verifyCredentials(String email,String password);
	
}
