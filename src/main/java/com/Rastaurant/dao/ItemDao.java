package com.Rastaurant.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.Rastaurant.dto.ItemAndCartDto;
import com.Rastaurant.entity.Item;

public interface ItemDao extends JpaRepository<Item,Integer> {
	
    @Modifying
    @Transactional
	@Query(value= "update item set icount=?1 where iid=?2",nativeQuery = true)
	public void updateItemCount(int idVal,int iid);
    
    @Modifying
    @Transactional
	@Query(value = "update Item set icount=0")
	public void updateIcount();
	
    
    @Query(value="select new com.Rastaurant.dto.ItemAndCartDto(c.iid, i.icost, c.icount, i.idesc, i.iftype, i.ift, i.iname, i.picByte, c.cemail, c.date ) from item i join cart c on i.iid=c.iid where cemail=?1",nativeQuery = true)
    public List<ItemAndCartDto> joinItemAndCart(String cemail);
}
