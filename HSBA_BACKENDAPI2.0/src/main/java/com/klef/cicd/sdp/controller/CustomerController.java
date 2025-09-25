package com.klef.cicd.sdp.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.HomeService;
import com.klef.cicd.sdp.model.ServiceBooking;
import com.klef.cicd.sdp.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*") // * means any URL
public class CustomerController 
{
   @Autowired
   private CustomerService customerService;
	
   @GetMapping("/")
   public String home()
   {
	   return "Home Services Booking Platform";
   }
   
   @PostMapping("/registration")
   public ResponseEntity<String> customerregistration(@RequestBody Customer customer)
   {
	   try
	   {
		  String output = customerService.customerregistration(customer);
		  return ResponseEntity.ok(output); // 200 - success
	   }
	   catch(Exception e)
	   {
		   e.printStackTrace();
		   return ResponseEntity.status(500).body("Customer Registration Failed ...");
	   }
   }
   
   @PostMapping("/checkcustomerlogin")
   public ResponseEntity<?> checkcustomerlogin(@RequestBody Customer customer) 
   {
       try 
       {
           Customer c = customerService.checkcustomerlogin(customer.getUsername(), customer.getPassword());

           if (c!=null) 
           {
               return ResponseEntity.ok(c); // if login is successful
           } 
           else 
           {
               return ResponseEntity.status(401).body("Invalid Username or Password"); // if login is fail
           }
       } 
       catch (Exception e) 
       {
           return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
       }
   }
   
   @PutMapping("/updateprofile")
   public ResponseEntity<String> customerupdateprofile(@RequestBody Customer customer)
   {
 	  try
 	   {
 		  System.out.println(customer.toString());
 		  String output = customerService.customerupdateprofile(customer);
 		  return ResponseEntity.ok(output);
 	   }
 	   catch(Exception e)
 	   {
 		    System.out.println(e.getMessage());
 		    return ResponseEntity.status(500).body("Failed to Update Customer ... !!"); 
 	   }
   }

   @GetMapping("/viewallservices")
   public ResponseEntity<List<HomeService>> viewallservices()
   {
 	 List<HomeService> services =  customerService.viewallservices();
 	 
 	 return ResponseEntity.ok(services); // 200 - success
   }
   
  
   @PostMapping("/bookservice")
   public ResponseEntity<String> bookservice(@RequestBody ServiceBooking serviceBooking) 
   {
      try
      {
    	  int bookingId = new Random().nextInt(900000) + 100000;  // 6-digit ID
          serviceBooking.setId(bookingId);

          Customer customer = customerService.getCustomerById(serviceBooking.getCustomer().getId());
          HomeService service = customerService.getServiceById(serviceBooking.getService().getId());
         

          // Assign actual customer and service objects
          serviceBooking.setCustomer(customer);
          serviceBooking.setService(service);

          // Set status to "BOOKED"
          serviceBooking.setStatus("BOOKED");

          String output = customerService.bookservice(serviceBooking);

          return ResponseEntity.ok(output); // 200/ - success
      }
      catch (Exception e) 
      {
    	  return ResponseEntity.status(500).body("Failed to Book a Service: " + e.getMessage());
	  }
   }

   @GetMapping("/bookedservices/{cid}") 
   public ResponseEntity<List<ServiceBooking>> getServicesByCustomer(@PathVariable int cid) 
   {
       List<ServiceBooking> bookedservices =  customerService.getbookedservicesByCustomer(cid);
   	 return ResponseEntity.ok(bookedservices); // 200 - success
   }  
   
   
}