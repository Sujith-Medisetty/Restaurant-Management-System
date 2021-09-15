package com.Rastaurant.entity;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Item {
	
	public Item() {
		super();
	}
	
	public Item(String iname, String idesc, String icost, byte[] picByte, String iftype, String ift, int icount) {
		super();
		this.iname = iname;
		this.idesc = idesc;
		this.icost = icost;
		this.picByte = picByte;
		this.iftype = iftype;
		this.ift = ift;
		this.icount = icount;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int iid;
	private String iname;
	private String idesc;
	private String icost;
	
	@Lob
	private byte[] picByte;
	
	private String iftype;
	private String ift;
	private int icount;
	
	public int getIid() {
		return iid;
	}
	public void setIid(int iid) {
		this.iid = iid;
	}
	public String getIname() {
		return iname;
	}
	public void setIname(String iname) {
		this.iname = iname;
	}
	public String getIdesc() {
		return idesc;
	}
	public void setIdesc(String idesc) {
		this.idesc = idesc;
	}
	public String getIcost() {
		return icost;
	}
	public void setIcost(String icost) {
		this.icost = icost;
	}
	public byte[] getPicByte() {
		return picByte;
	}
	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}
	public String getIftype() {
		return iftype;
	}
	public void setIftype(String iftype) {
		this.iftype = iftype;
	}
	public String getIft() {
		return ift;
	}
	public void setIft(String ift) {
		this.ift = ift;
	}
	public int getIcount() {
		return icount;
	}
	public void setIcount(int icount) {
		this.icount = icount;
	}
	@Override
	public String toString() {
		return "Item [iid=" + iid + ", iname=" + iname + ", idesc=" + idesc + ", icost=" + icost + ", picByte="
				+ Arrays.toString(picByte) + ", iftype=" + iftype + ", ift=" + ift + ", icount=" + icount + "]";
	}
	
	
}
