package com.Rastaurant.entity;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int oid;
	private int iid;
	private String iname;
	private String idesc;
	private String icost;
	
	@Lob
	private byte[] picByte;
	
	private String iftype;
	private String ift;
	private int icount;
	private String paymentmode;
	private String cemail;
	private int helpstatus;
	private String helpdesc;
	private int orderstatus;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Orders(int iid, String iname, String idesc, String icost, byte[] picByte, String iftype, String ift,
			int icount, String paymentmode, String cemail, int helpstatus, String helpdesc, int orderstatus,
			Date date) {
		super();
		this.iid = iid;
		this.iname = iname;
		this.idesc = idesc;
		this.icost = icost;
		this.picByte = picByte;
		this.iftype = iftype;
		this.ift = ift;
		this.icount = icount;
		this.paymentmode = paymentmode;
		this.cemail = cemail;
		this.helpstatus = helpstatus;
		this.helpdesc = helpdesc;
		this.orderstatus = orderstatus;
		this.date = date;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

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

	public String getPaymentmode() {
		return paymentmode;
	}

	public void setPaymentmode(String paymentmode) {
		this.paymentmode = paymentmode;
	}

	public String getCemail() {
		return cemail;
	}

	public void setCemail(String cemail) {
		this.cemail = cemail;
	}

	public int getHelpstatus() {
		return helpstatus;
	}

	public void setHelpstatus(int helpstatus) {
		this.helpstatus = helpstatus;
	}

	public String getHelpdesc() {
		return helpdesc;
	}

	public void setHelpdesc(String helpdesc) {
		this.helpdesc = helpdesc;
	}

	public int getOrderstatus() {
		return orderstatus;
	}

	public void setOrderstatus(int orderstatus) {
		this.orderstatus = orderstatus;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Orders [oid=" + oid + ", iid=" + iid + ", iname=" + iname + ", idesc=" + idesc + ", icost=" + icost
				+ ", picByte=" + Arrays.toString(picByte) + ", iftype=" + iftype + ", ift=" + ift + ", icount=" + icount
				+ ", paymentmode=" + paymentmode + ", cemail=" + cemail + ", helpstatus=" + helpstatus + ", helpdesc="
				+ helpdesc + ", orderstatus=" + orderstatus + ", date=" + date + "]";
	}
	

	
}
