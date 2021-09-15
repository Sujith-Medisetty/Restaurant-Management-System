package com.Rastaurant.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.KitchenMaster;

public interface KitchenMasterDao extends JpaRepository<KitchenMaster, String> {

	@Query(value="select count(*) from KitchenMaster k where k.kemail=?1 and k.kpassword=?2")
	int verifyCredentials(String email,String password);
	
}
