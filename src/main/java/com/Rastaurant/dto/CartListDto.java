package com.Rastaurant.dto;

import java.util.Arrays;

import javax.persistence.Lob;

public class CartListDto {
	
	private String iname;
	private String idesc;
	private String icost;

	@Lob
	private byte[] selectedFile;
	
	private String iftype;
	private String ift;
	private int icount;
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
	public byte[] getSelectedFile() {
		return selectedFile;
	}
	public void setSelectedFile(byte[] selectedFile) {
		this.selectedFile = selectedFile;
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
		return "CartListDto [iname=" + iname + ", idesc=" + idesc + ", icost=" + icost + ", selectedFile="
				+ Arrays.toString(selectedFile) + ", iftype=" + iftype + ", ift=" + ift + ", icount=" + icount + "]";
	}
	
	
}
