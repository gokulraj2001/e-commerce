package com.example.demo.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin
public class OrderController {

		@Autowired
		OrderService service;
		
		@GetMapping("/all")
		List<Order> getAllOrders() {
			return service.getAllOrders();
		}
		
		@GetMapping("/count")
		long getCountOfOrders() {
			return service.getCountOfOrders();
		}
		
		@GetMapping("/delivered")
		long countByOrdersDelivered() {
			return service.countByDelivered();
		}
		
		@GetMapping("/cancelled")
		long countByCancelled() {
			return service.countByCancelled();
		}
		
//		@GetMapping("/{id}")
//		List<Order> getOrderById(@PathVariable int id) {
//			return service.getOrdersByUserId(id);
//		}
		
		@GetMapping("/{username}")
		List<Order> getOrdersByUsername(@PathVariable String username) {
			return service.getOrdersByUsername(username);
		}
		
		
//		@PostMapping("/addorders/{username}")
//		List<Order> addOrders(@PathVariable String username, @RequestBody List<Order> order){
//			System.out.println(order);
//			return service.addOrders(username, order);
//		}
		
		@PostMapping("/addorders/{username}")
		Order addOrders(@PathVariable String username, @RequestBody Order order) {
			System.out.println(order);
			return service.addOrders(username, order);
		}
		
		@PostMapping("/update")
		Order updateOrder(@RequestBody Order order) {
			return service.updateOrder(order);
		}
		
		@PostMapping("/cancelorder")
		Order cancelOrder(@RequestBody Order order) {
			return service.cancelOrder(order);
		}
}
