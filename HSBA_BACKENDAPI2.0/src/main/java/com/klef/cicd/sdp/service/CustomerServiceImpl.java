package com.klef.cicd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.HomeService;
import com.klef.cicd.sdp.model.ServiceBooking;
import com.klef.cicd.sdp.repository.CustomerRepository;
import com.klef.cicd.sdp.repository.HomeServiceRepository;
import com.klef.cicd.sdp.repository.ServiceBookingRepository;
import com.klef.cicd.sdp.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService
{
	@Autowired
    private CustomerRepository customerRepository;
	
	@Autowired
	private HomeServiceRepository homeServiceRepository;
	
	@Autowired
	private ServiceBookingRepository serviceBookingRepository;
	
	@Override
	public String customerregistration(Customer customer) 
	{
		customerRepository.save(customer);
		return "Customer Registered Successfully";
	}

	@Override
	public Customer checkcustomerlogin(String username, String password) 
	{
		return customerRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public String customerupdateprofile(Customer customer) 
	{
		Optional<Customer> object	= customerRepository.findById(customer.getId());
		
		String msg = null;
			  
			  if(object.isPresent())
			  {
				  Customer c = object.get();
				  
				  c.setName(customer.getName());
				  c.setDob(customer.getDob());
				  c.setMobileno(customer.getMobileno());
				  c.setEmail(customer.getEmail());
				  c.setPassword(customer.getPassword());
				  c.setLocation(customer.getLocation());
				  
				  customerRepository.save(customer);
				  
				  msg = "Customer Profile Updated Successfully";
			  }
			  else
			  {
				  msg = "Customer ID Not Found to Update";
			  }
			  return msg;
	}

	@Override
	public List<HomeService> viewallservices() 
	{
	   return homeServiceRepository.findAll();
	}

	@Override
	public Customer getCustomerById(int cid) 
	{
		return customerRepository.findById(cid).orElse(null);
	}

	@Override
	public HomeService getServiceById(int sid) 
	{
		return homeServiceRepository.findById(sid).orElse(null);
	}

	@Override
	public String bookservice(ServiceBooking serviceBooking) 
	{
		serviceBookingRepository.save(serviceBooking);
		return "Service Booked Successfully";
	}

	@Override
	public List<ServiceBooking> getbookedservicesByCustomer(int cid) 
	{
		Customer customer = customerRepository.findById(cid).orElse(null);
		return serviceBookingRepository.findByCustomer(customer);
	}
	

}
