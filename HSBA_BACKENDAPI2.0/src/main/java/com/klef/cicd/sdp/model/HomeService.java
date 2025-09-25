package com.klef.cicd.sdp.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="home_service_table")
public class HomeService {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) //auto increment
	private int id;
	
	@Column(nullable=false,length=100)
	private String category;
	
	@Column(nullable=false,length=100)
	private String serviceName;
	
	@Column(nullable=false,length=500)
	private String description;
	
	@Column(nullable=false)
	private int serviceDuration;  // in minutes or hours
	
	@Column(nullable=false)
	private double servicePrice;
	
	@Column(nullable=false,length=20)
	private String serviceStatus;  // e.g., PENDING, COMPLETED
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "service_provider_id")
	private ServiceProvider serviceProvider;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getServiceStatus() {
		return serviceStatus;
	}

	public void setServiceStatus(String serviceStatus) {
		this.serviceStatus = serviceStatus;
	}

	public ServiceProvider getServiceProvider() {
		return serviceProvider;
	}

	public void setServiceProvider(ServiceProvider serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

}

