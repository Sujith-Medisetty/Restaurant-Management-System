package com.Rastaurant.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.Rastaurant.entityInterface.EntityInterface;

@Entity
public class Supervisor implements EntityInterface {

	@Id
	private String semail;
	private String spassword;
	private String sname;
	private String sphone;
	
	
	public String getSemail() {
		return semail;
	}
	public void setSemail(String semail) {
		this.semail = semail;
	}
	public String getSpassword() {
		return spassword;
	}
	public void setSpassword(String spassword) {
		this.spassword = spassword;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getSphone() {
		return sphone;
	}
	public void setSphone(String sphone) {
		this.sphone = sphone;
	}
	@Override
	public String toString() {
		return "Supervisor [semail=" + semail + ", spassword=" + spassword + ", sname=" + sname + ", sphone=" + sphone
				+ "]";
	}
	
}
