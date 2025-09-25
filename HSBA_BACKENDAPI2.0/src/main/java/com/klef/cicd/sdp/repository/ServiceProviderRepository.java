package com.klef.cicd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.cicd.sdp.model.ServiceProvider;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Integer> 
{
	public ServiceProvider findByUsernameAndPassword(String username, String password);
	
	// Add other query methods if needed
}