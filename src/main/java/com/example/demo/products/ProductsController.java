package com.example.demo.products;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
@CrossOrigin
@RestController
@RequestMapping("/admin/products")
public class ProductsController {
	
	@Autowired
	ProductsService service;
	
	@GetMapping("/count")
	public long getCountOfProducts() {
		return service.getCountOfProducts();
	}
	
	@GetMapping("/all")
	public List<Products> getAllItems() {
		return service.getAllItems();
	}
	
	@PostMapping("/add")
	public Products addProduct(@RequestBody Products product) {
		return service.addProduct(product);
	}
	
	
//	@PostMapping("/add")
//	public ResponseEntity<?> addProduct(@RequestParam("image")MultipartFile file,
//			@RequestParam("name") String name, 
//			@RequestParam("category") String category, 
//			@RequestParam("price") double price){
//		String uploadImage= service.addProduct(file, name, category, price);
//		return ResponseEntity.status(HttpStatus.OK)
//				.body(uploadImage);
//		}
	
	@DeleteMapping("/delete/{id}")
	public void deleteItem(@PathVariable int id) {
		service.deleteItem(id);
	}
	
	@PostMapping("/update")
	public Products updateItem(@RequestBody Products products) {
		return service.updateItem(products);
	}
	
	@GetMapping("/{id}")
	public Optional<Products> getItemById(@PathVariable int id) {
		return service.getItemById(id);
	}
}