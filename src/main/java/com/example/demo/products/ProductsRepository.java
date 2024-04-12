package com.example.demo.products;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer>{
	
	List<Products> findByName(String name);

	List<Products> findByNameContainingIgnoreCase(String query);
	
	long count();
}
