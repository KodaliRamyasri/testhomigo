package com.klef.cicd.sdp.service;

import java.util.List;

import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.HomeService;
import com.klef.cicd.sdp.model.ServiceBooking;

public interface CustomerService 
{
  public String customerregistration(Customer customer);
  public Customer checkcustomerlogin(String username,String password);
  
  public String customerupdateprofile(Customer customer);
  
  public List<HomeService> viewallservices();
  
  public Customer getCustomerById(int cid);
  public HomeService getServiceById(int sid);
  
  public String bookservice(ServiceBooking serviceBooking);
  public List<ServiceBooking> getbookedservicesByCustomer(int cid);
  
}
