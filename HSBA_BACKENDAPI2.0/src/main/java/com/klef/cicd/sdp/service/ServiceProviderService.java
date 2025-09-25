package com.klef.cicd.sdp.service;


import java.util.List;

import com.klef.cicd.sdp.model.HomeService;
import com.klef.cicd.sdp.model.ServiceBooking;
import com.klef.cicd.sdp.model.ServiceProvider;

public interface ServiceProviderService 
{
  public ServiceProvider checkServiceProviderLogin(String username,String password);
  
  public String addService(HomeService service);
  public List<HomeService> viewServicesByProvider(int serviceProviderId);
  
  public ServiceProvider getServiceProviderById(int serviceProviderId);
  
  public List<ServiceBooking> getBookingsByProvider(int serviceProviderId);
  
  public String updateServiceProvider(ServiceProvider serviceProvider);

  public String updateBookingStatus(int id,String status);
}
