package com.example.demo.order;

import java.time.LocalDateTime;

import com.example.demo.products.Products;
import com.example.demo.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Table(name="OrderDetails")
public class Order{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss")
	private LocalDateTime date;
	
	private int userId;	
	private String productName;
	private String name;
	private String address;
	private long mobile;
	private int pincode;
	private String type;
	private double amount;
	private int quantity;
	private String status;
	private String modeOfPayment;
	private String reasonForCancellation;
	private String imageUrl;
	
	
//	public Order(LocalDateTime date, int productId, int userId, String productName, String name, String address, long mobile,
//			int pincode, String type, double amount, int quantity, String status, String modeOfPayment,
//			String reasonForCancellation) {
//		super();
//		this.date = date;
//		this.user = new User(userId);
//		this.product= new Products(productId);
//		this.productName = productName;
//		this.name = name;
//		this.address = address;
//		this.mobile = mobile;
//		this.pincode = pincode;
//		this.type = type;
//		this.amount = amount;
//		this.quantity = quantity;
//		this.status = status;
//		this.modeOfPayment = modeOfPayment;
//		this.reasonForCancellation = reasonForCancellation;
//	}
//	
//	public Order() {
//	};
	
	
	
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getProductName() {
//		return productName;
//	}
//	public void setProductName(String productName) {
//		this.productName = productName;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getAddress() {
//		return address;
//	}
//	public void setAddress(String address) {
//		this.address = address;
//	}
//	public long getMobile() {
//		return mobile;
//	}
//	public void setMobile(long mobile) {
//		this.mobile = mobile;
//	}
//	public int getPincode() {
//		return pincode;
//	}
//	public void setPincode(int pincode) {
//		this.pincode = pincode;
//	}
//	public String getType() {
//		return type;
//	}
//	public void setType(String type) {
//		this.type = type;
//	}
//	public int getUserId() {
//		return userId;
//	}
//	public void setUserId(int userId) {
//		this.userId = userId;
//	}
//	public double getAmount() {
//		return amount;
//	}
//	public void setAmount(double amount) {
//		this.amount = amount;
//	}
//	public int getQuantity() {
//		return quantity;
//	}
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//	public Order(String productName, String name, String address, long mobile, int pincode, String type, int userId,
//			double amount, int quantity) {
//		super();
//		this.productName = productName;
//		this.name = name;
//		this.address = address;
//		this.mobile = mobile;
//		this.pincode = pincode;
//		this.type = type;
//		this.userId = userId;
//		this.amount = amount;
//		this.quantity = quantity;
//	}
//	@Override
//	public String toString() {
//		return "Order [id=" + id + ", productName=" + productName + ", name=" + name + ", address=" + address
//				+ ", mobile=" + mobile + ", pincode=" + pincode + ", type=" + type + ", userId=" + userId + ", amount="
//				+ amount + ", quantity=" + quantity + "]";
//	}
	
	
	
}
