package com.Rastaurant.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.entity.Orders;

public interface OrdersDao extends JpaRepository<Orders, Integer> {

	@Query(value="select count(*) from Orders o where o.iid=?1 and o.cemail=?2")
	public int findByIIdAndCemail(int iid,String cemail);
	
	@Query(value="select * from Orders o order by o.date desc",nativeQuery = true)
	public List<Orders> findAllOrders();
	
    @Modifying
    @Transactional
	@Query(value = "update Orders o set o.orderstatus=1 where o.oid=?1")
	public void updateOrderStatus(int oid);
    
    @Modifying
    @Transactional
    @Query(value="update Orders o set o.helpstatus=0, o.helpdesc='' where o.oid=?1")
    public void updateHelpStatus(int oid);
    
    
    @Modifying
    @Transactional
    @Query(value="update Orders o set o.helpstatus=1, o.helpdesc=?1 where o.oid=?2")
    public void solveHelpStatus(String desc,int oid);
    
    
}
