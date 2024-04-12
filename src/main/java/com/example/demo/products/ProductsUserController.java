package com.example.demo.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/users")
public class ProductsUserController {
	
	@Autowired
	ProductsService service;
	
	@GetMapping("/all")
	public List<Products> getAllItems() {
		return service.getAllItems();
	
	}
	
	@GetMapping("/search")
	public List<Products> searchProducts(@RequestParam String query){
		return service.searchProducts(query);
	}
}
