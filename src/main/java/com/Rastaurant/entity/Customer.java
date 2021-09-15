package com.Rastaurant.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.Rastaurant.entityInterface.EntityInterface;

@Entity
public class Customer implements EntityInterface {

	@Id
	private String cemail;
	private String cpassword;
	private String cname;
	private String cphone;
	
	

	public String getCemail() {
		return cemail;
	}
	public void setCemail(String cemail) {
		this.cemail = cemail;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getCphone() {
		return cphone;
	}
	public void setCphone(String cphone) {
		this.cphone = cphone;
	}
	@Override
	public String toString() {
		return "Customer [ceamil=" + cemail + ", cpassword=" + cpassword + ", cname=" + cname + ", cphone=" + cphone
				+ "]";
	}
	
	
	
	
}
