package com.klef.cicd.sdp.dto;

public class ServiceDTO 
{
    public String category;
    public String serviceName;
    public String description;
    public int serviceDuration;
    public double servicePrice;
    public int serviceProvider_id;
    
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getServiceDuration() {
		return serviceDuration;
	}
	public void setServiceDuration(int serviceDuration) {
		this.serviceDuration = serviceDuration;
	}
	public double getServicePrice() {
		return servicePrice;
	}
	public void setServicePrice(double servicePrice) {
		this.servicePrice = servicePrice;
	}
	public int getServiceProvider_id() {
		return serviceProvider_id;
	}
	public void setServiceProvider_id(int serviceProvider_id) {
		this.serviceProvider_id = serviceProvider_id;
	}
}
