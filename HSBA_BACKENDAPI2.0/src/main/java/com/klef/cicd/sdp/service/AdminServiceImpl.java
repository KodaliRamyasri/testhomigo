package com.klef.cicd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.klef.cicd.sdp.model.Admin;
import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.ServiceProvider;
import com.klef.cicd.sdp.repository.AdminRepository;
import com.klef.cicd.sdp.repository.CustomerRepository;
import com.klef.cicd.sdp.repository.HomeServiceRepository;
import com.klef.cicd.sdp.repository.ServiceBookingRepository;
import com.klef.cicd.sdp.repository.ServiceProviderRepository;


@Service
public class AdminServiceImpl implements AdminService
{
	@Autowired
    private AdminRepository adminRepository;
	
	@Autowired
    private ServiceProviderRepository serviceProviderRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private HomeServiceRepository serviceRepository;

	@Autowired
	private ServiceBookingRepository serviceBookingRepository;
	
	@Override
	public Admin checkadminlogin(String username, String password)
	{
		return adminRepository.findByUsernameAndPassword(username, password);
	}

	@Override
    public Admin getAdminByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    @Override
    public String updateAdmin(Admin admin) {
        adminRepository.save(admin);
        return "Admin Profile Updated Successfully";
    }

	@Override
	public String addserviceprovider(ServiceProvider serviceProvider) 
	{
		serviceProviderRepository.save(serviceProvider);
		return "Service Provider Added Successfully";
	}

	@Override
	public List<ServiceProvider> displayserviceproviders() 
	{
		return serviceProviderRepository.findAll();
	}

	@Override
	public List<Customer> displaycustomers() 
	{
		return customerRepository.findAll();
	}

	@Override
	@Transactional
	public String deletecustomer(int cid)
	{
	    Optional<Customer> customer = customerRepository.findById(cid);

	    if (customer.isPresent())
	    {
	        // Delete related bookings first
	        serviceBookingRepository.deleteByCustomerId(cid);
	        // Then delete the customer
	        customerRepository.deleteById(cid);
	        return "Customer Deleted Successfully";
	    }
	    else
	    {
	        return "Customer ID Not Found";
	    }
	}

	@Override
	@Transactional
	public String deleteserviceprovider(int spid)
	{
        Optional<ServiceProvider> serviceProvider = serviceProviderRepository.findById(spid);

	    if (serviceProvider.isPresent())
	    {
	        // Delete related bookings first
	        serviceBookingRepository.deleteByServiceProviderId(spid);
	        // Delete related services
	        serviceRepository.deleteByServiceProviderId(spid);
	        // Then delete the service provider
	        serviceProviderRepository.deleteById(spid);
	        return "Service Provider Deleted Successfully";
	    }
	    else
	    {
	        return "Service Provider ID Not Found";
	    }
	}

	@Override
	public long displaycustomercount() 
	{
		return customerRepository.count();
	}

	@Override
	public long displayserviceprovidercount() 
	{
		return serviceProviderRepository.count();
	}

	@Override
	public long displayservicecount() 
	{
		return serviceRepository.count();
	}

}
