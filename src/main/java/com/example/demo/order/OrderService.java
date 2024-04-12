package com.example.demo.order;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.products.ProductsRepository;
import com.example.demo.user.User;
import com.example.demo.user.UserRepository;

@Service
public class OrderService {
	
	@Autowired
	OrderRepository repo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	ProductsRepository productRepo;
	
	List<Order> getAllOrders() {
		return repo.findAll();
	}
	
	List<Order> getOrdersByUserId(int id) {
		return repo.findByUserId(id);
	}
	
	List<Order> getOrdersByUsername(String username) {
		int id= userRepo.findByUsername(username).getId();
		return repo.findByUserId(id);
		
		
	}
	
	public long countByDelivered() {
		return repo.countByStatus("Delivered");
	}
	
	public long countByCancelled() {
		return repo.countByStatus("Cancelled");
	}
	
	public long getCountOfOrders() {
		return repo.count();
	}
	
//	List<Order> addOrders(String username, List<Order> order) {
//		int id= userRepo.findByUsername(username).getId();
//		for(Order item: order) {
//			item.setUserId(id);;
//		}
//		return repo.saveAll(order);
//	}
	Order addOrders(String username, Order order) {
		order.setDate(LocalDateTime.now());
		int id= userRepo.findByUsername(username).getId();
		order.setUserId(id);
		order.setStatus("Order Placed");
		return repo.save(order);
	}
	
	Order updateOrder(Order order) {
		return repo.save(order);
	}
	
	Order cancelOrder(Order order) {
		Order orderDetails= repo.findById(order.getId());
		orderDetails.setStatus(order.getStatus());
		orderDetails.setReasonForCancellation(order.getReasonForCancellation());
		return repo.save(orderDetails);
	}
}
