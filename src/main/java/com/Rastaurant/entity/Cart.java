package com.Rastaurant.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartid;
	private String cemail;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	private int iid;
	private int icount;
	
	
	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Cart(String cemail, Date date, int iid, int icount) {
		super();
		this.cemail = cemail;
		this.date = date;
		this.iid = iid;
		this.icount = icount;
	}
	
	
	public int getCartid() {
		return cartid;
	}
	public void setCartid(int cartid) {
		this.cartid = cartid;
	}
	public String getCemail() {
		return cemail;
	}
	public void setCemail(String cemail) {
		this.cemail = cemail;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getIid() {
		return iid;
	}
	public void setIid(int iid) {
		this.iid = iid;
	}
	public int getIcount() {
		return icount;
	}
	public void setIcount(int icount) {
		this.icount = icount;
	}
	@Override
	public String toString() {
		return "Cart [cartid=" + cartid + ", cemail=" + cemail + ", date=" + date + ", iid=" + iid + ", icount="
				+ icount + "]";
	}
	
	

}
