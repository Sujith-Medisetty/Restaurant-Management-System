package com.Rastaurant.dto;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ItemAndCartDto {

	private int iid;
	private String icost;
	private int icount;
	private String idesc;
	private String iftype;
	private String ift;
	private String iname;	
	
	@Lob
	private byte[] picByte;
	
	private String cemail;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	
	
	public ItemAndCartDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ItemAndCartDto(int iid, String icost, int icount, String idesc, String iftype, String ift, String iname,
			byte[] picByte, String cemail, Date date) {
		super();
		this.iid = iid;
		this.icost = icost;
		this.icount = icount;
		this.idesc = idesc;
		this.iftype = iftype;
		this.ift = ift;
		this.iname = iname;
		this.picByte = picByte;
		this.cemail = cemail;
		this.date = date;
	}

	public int getIid() {
		return iid;
	}

	public void setIid(int iid) {
		this.iid = iid;
	}

	public String getIcost() {
		return icost;
	}

	public void setIcost(String icost) {
		this.icost = icost;
	}

	public int getIcount() {
		return icount;
	}

	public void setIcount(int icount) {
		this.icount = icount;
	}

	public String getIdesc() {
		return idesc;
	}

	public void setIdesc(String idesc) {
		this.idesc = idesc;
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

	public String getIname() {
		return iname;
	}

	public void setIname(String iname) {
		this.iname = iname;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
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

	@Override
	public String toString() {
		return "ItemAndCartDto [iid=" + iid + ", icost=" + icost + ", icount=" + icount + ", idesc=" + idesc
				+ ", iftype=" + iftype + ", ift=" + ift + ", iname=" + iname + ", picByte=" + Arrays.toString(picByte)
				+ ", cemail=" + cemail + ", date=" + date + "]";
	}
	
	
	
}
