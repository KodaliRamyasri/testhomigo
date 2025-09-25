package com.klef.cicd.sdp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.cicd.sdp.model.HomeService;
import com.klef.cicd.sdp.model.ServiceProvider;

@Repository
public interface HomeServiceRepository extends JpaRepository<HomeService, Integer> 
{
	public List<HomeService> findByServiceProvider(ServiceProvider serviceProvider);

	// Delete services by service provider
	@Query("DELETE FROM HomeService hs WHERE hs.serviceProvider.id = ?1")
	@Modifying
	void deleteByServiceProviderId(int serviceProviderId);

	// Add other query methods if needed
}