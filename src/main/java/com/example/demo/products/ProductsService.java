package com.example.demo.products;

import java.io.File;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
@Service
public class ProductsService {
	
	@Autowired
	ProductsRepository repository;
	
	private final String FOLDER_PATH="C:/Users/VGO2AR7/Desktop/react/updated_frontend/updated_frontend/public/images/products/>";
	
	public List<Products> getAllItems() {
		return repository.findAll();
	}
	
	public Products addProduct(Products product) {
		return repository.save(product);
	}
	
	public long getCountOfProducts() {
		return repository.count();
	}
	
//	String addProduct(MultipartFile file, String name, String category, double price ) {
//		String filepath= FOLDER_PATH+ name;
//		Products product= repository.save(Products.builder()
//				.name(name)
//				.category(category)
//				.price(price)
//				.imageUrl(filepath).build());
//	
//		try {
//			file.transferTo(new File(filepath));
//		} catch (Exception e) {
//			System.out.println(e.getMessage());
//			e.printStackTrace();
//		}
//	
//	if(product != null) {
//		return "file uploaded";
//	} else {
//		return "error uploading file";
//	}
//
//}
	
	public void deleteItem(int id) {
		repository.deleteById(id);
	}
	
	public Products updateItem(Products product) {
		return repository.save(product);
	}
	
	public Optional<Products> getItemById(int id) {
		return repository.findById(id);
	}
	
	public List<Products> searchProducts(String query){
		return repository.findByNameContainingIgnoreCase(query);
	}

}









