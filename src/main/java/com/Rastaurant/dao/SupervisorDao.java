package com.Rastaurant.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.Supervisor;

public interface SupervisorDao extends JpaRepository<Supervisor,String>{

	@Query(value="select count(*) from Supervisor s where s.semail=?1 and s.spassword=?2",nativeQuery = true)
	int verifyCredentials(String email,String password);
	
}
