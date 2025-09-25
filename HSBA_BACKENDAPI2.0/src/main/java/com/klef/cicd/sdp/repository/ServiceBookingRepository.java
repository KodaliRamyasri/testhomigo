package com.klef.cicd.sdp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.klef.cicd.sdp.model.Customer;
import com.klef.cicd.sdp.model.ServiceBooking;

@Repository
public interface ServiceBookingRepository extends JpaRepository<ServiceBooking, Integer> 
{
    @Query("SELECT sb FROM ServiceBooking sb WHERE sb.service.serviceProvider.id = ?1")
    public List<ServiceBooking> getBookingsByProvider(int serviceProviderId);
    
    @Query("UPDATE ServiceBooking sb SET sb.status = ?1 WHERE sb.id = ?2")
    @Modifying
    public int updateStatusById(String status, int id);

    // Added method to find bookings by customer
    List<ServiceBooking> findByCustomer(Customer customer);

    // Delete bookings by customer
    @Query("DELETE FROM ServiceBooking sb WHERE sb.customer.id = ?1")
    @Modifying
    void deleteByCustomerId(int customerId);

    // Delete bookings by service provider
    @Query("DELETE FROM ServiceBooking sb WHERE sb.service.serviceProvider.id = ?1")
    @Modifying
    void deleteByServiceProviderId(int serviceProviderId);
}
