package com.klef.cicd.sdp.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "service_booking_table")
public class ServiceBooking 
{
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private HomeService service;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(nullable = false)
    private String serviceStartDate;

    @Column(nullable = false)
    private String serviceEndDate;

    @Column(nullable = false)
    private String status;

    // Automatically sets the booking time at record creation
    @CreationTimestamp
    @Column(nullable = false)
    private LocalDateTime bookingTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public HomeService getService() {
        return service;
    }

    public void setService(HomeService service) {
        this.service = service;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getServiceStartDate() {
        return serviceStartDate;
    }

    public void setServiceStartDate(String serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
    }

    public String getServiceEndDate() {
        return serviceEndDate;
    }

    public void setServiceEndDate(String serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDateTime bookingTime) {
        this.bookingTime = bookingTime;
    }

	@Override
	public String toString() {
		return "ServiceBooking [id=" + id + ", service=" + service + ", customer=" + customer + ", serviceStartDate=" + serviceStartDate
				+ ", serviceEndDate=" + serviceEndDate + ", status=" + status
				+ ", bookingTime=" + bookingTime + "]";
	}
}

