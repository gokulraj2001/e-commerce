package com.example.demo.products;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
@Entity
//@Data
//@Builder
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(unique = true)
	private String name;
	private String category;
	private double price;
	private String imageUrl;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	@Override
	public String toString() {
		return "Products [id=" + id + ", name=" + name + ", category=" + category + ", price=" + price + ", imageUrl="
				+ imageUrl + "]";
	}
	public Products(String name, String category, double price, String imageUrl) {
		this.name = name;
		this.category = category;
		this.price = price;
		this.imageUrl = imageUrl;
	}
	
	Products(){
		
	}
	public Products(int id, String name, String category, double price, String imageUrl) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.imageUrl = imageUrl;
	}
	
	
}
