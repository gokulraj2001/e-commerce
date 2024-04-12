package com.example.demo.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	List<Order> findByUserId(int userId);
	
	Order findById(int id);
	
//	@Query("SELECT COUNT(*) FROM order_details WHERE status='Delivered'")
//	public long countByOrdersDelivered();
	
	long countByStatus(String status);
	
	long count();
}
