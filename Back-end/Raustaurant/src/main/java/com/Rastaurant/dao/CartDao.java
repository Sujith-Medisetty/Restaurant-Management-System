package com.Rastaurant.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {

	@Query(value = "select count(*) from Cart where cemail=?1 and iid=?2",nativeQuery = true)
	public int findByCemail(String cemail,int iid);
	
	@Query(value = "select icount from Cart where cemail=?1 and iid=?2",nativeQuery = true)
	public int findByCemailAndIidIcount(String cemail,int iid);	
	
	@Query(value = "select icount from Cart where cemail=?1",nativeQuery = true)
	public int getIcount(String email);
	
	@Query(value = "select * from Cart where cemail=?1 and iid=?2",nativeQuery = true)
	public Cart getCartItem(String email,int iid);
	
	@Modifying
	@Transactional
	@Query(value = "delete from Cart where cemail=?1 and iid=?2")
	public void deleteByCemailAndIid(String email,int iid);
	
	@Query(value = "select * from Cart where cemail=?1",nativeQuery = true)
	public List<Cart> cartList(String cemail);
}
