package com.klef.cicd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.klef.cicd.sdp.model.ServiceBooking;
import com.klef.cicd.sdp.model.ServiceProvider;
import com.klef.cicd.sdp.repository.HomeServiceRepository;
import com.klef.cicd.sdp.repository.ServiceBookingRepository;
import com.klef.cicd.sdp.repository.ServiceProviderRepository;


@Service
public class ServiceProviderServiceImpl implements ServiceProviderService
{
	@Autowired
    private ServiceProviderRepository serviceProviderRepository;
	
	@Autowired
    private HomeServiceRepository serviceRepository;
	
	@Autowired
	private ServiceBookingRepository serviceBookingRepository;
	
	@Override
	public ServiceProvider checkServiceProviderLogin(String username, String password) 
	{
		return serviceProviderRepository.findByUsernameAndPassword(username, password);
	}

	
	public String addService(com.klef.cicd.sdp.model.HomeService service) 
	{
		serviceRepository.save(service);
		return "Service Added Successfully";
	}

	@Override
	public ServiceProvider getServiceProviderById(int serviceProviderId) 
	{
	   return serviceProviderRepository.findById(serviceProviderId).get();
	}

	@Override
	public List<com.klef.cicd.sdp.model.HomeService> viewServicesByProvider(int serviceProviderId) 
	{
		 ServiceProvider serviceProvider = serviceProviderRepository.findById(serviceProviderId).orElse(null);
		 return serviceRepository.findByServiceProvider(serviceProvider);
	}

	@Override
	public List<ServiceBooking> getBookingsByProvider(int serviceProviderId) 
	{
		return serviceBookingRepository.getBookingsByProvider(serviceProviderId);
	}

	@Override
	public String updateServiceProvider(ServiceProvider serviceProvider)
	{
		serviceProviderRepository.save(serviceProvider);
		return "Service Provider Profile Updated Successfully";
	}

	@Override
	@Transactional
	public String updateBookingStatus(int id, String status)
	{
		serviceBookingRepository.updateStatusById(status,id);
		return "Booking Status Updated Successfully";
	}


	
}