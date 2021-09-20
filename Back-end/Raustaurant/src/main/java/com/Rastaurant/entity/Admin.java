package com.Rastaurant.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.Rastaurant.entityInterface.EntityInterface;

@Entity
public class Admin implements EntityInterface{

	@Id
	private String aemail;
	private String apassword;
	private String aname;
	private String aphone;
	
	
	public String getAemail() {
		return aemail;
	}
	public void setAemail(String aemail) {
		this.aemail = aemail;
	}
	public String getApassword() {
		return apassword;
	}
	public void setApassword(String apassword) {
		this.apassword = apassword;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public String getAphone() {
		return aphone;
	}
	public void setAphone(String aphone) {
		this.aphone = aphone;
	}
	@Override
	public String toString() {
		return "Admin [aemail=" + aemail + ", apassword=" + apassword + ", aname=" + aname + ", aphone=" + aphone + "]";
	}
	
}
