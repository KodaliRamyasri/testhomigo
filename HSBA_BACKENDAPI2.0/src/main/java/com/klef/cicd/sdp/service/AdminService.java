package com.klef.cicd.sdp.service;

import java.util.List;

import com.klef.cicd.sdp.model.Admin;
import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.ServiceProvider;

public interface AdminService
{
  public Admin checkadminlogin(String username,String password);
   //Admin findByUsername(String username);
  public Admin getAdminByUsername(String username);

  public String updateAdmin(Admin admin);

  public String addserviceprovider(ServiceProvider serviceProvider);
  public List<ServiceProvider> displayserviceproviders();
  public String deleteserviceprovider(int spid);

  public List<Customer> displaycustomers();
  public String deletecustomer(int cid);

  public long displaycustomercount();
  public long displayserviceprovidercount();
  public long displayservicecount();
  
}
