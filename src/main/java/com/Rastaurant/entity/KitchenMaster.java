package com.Rastaurant.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.Rastaurant.entityInterface.EntityInterface;

@Entity
public class KitchenMaster implements EntityInterface {

	@Id
	private String kemail;
	private String kpassword;
	private String kname;
	private String kphone;
	
	
	public String getKemail() {
		return kemail;
	}
	public void setKemail(String kemail) {
		this.kemail = kemail;
	}
	public String getKpassword() {
		return kpassword;
	}
	public void setKpassword(String kpassword) {
		this.kpassword = kpassword;
	}
	public String getKname() {
		return kname;
	}
	public void setKname(String kname) {
		this.kname = kname;
	}
	public String getKphone() {
		return kphone;
	}
	public void setKphone(String kphone) {
		this.kphone = kphone;
	}
	@Override
	public String toString() {
		return "KitchenMaster [kemail=" + kemail + ", kpassword=" + kpassword + ", kname=" + kname + ", kphone="
				+ kphone + "]";
	}
	
	
}
