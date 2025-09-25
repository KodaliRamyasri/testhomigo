import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminHome() {
  const [customerCount, setCustomerCount] = useState(0);
  const [serviceProviderCount, setServiceProviderCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customerRes = await axios.get(`${import.meta.env.VITE_API_URL}/admin/customercount`);
        const serviceProviderRes = await axios.get(`${import.meta.env.VITE_API_URL}/admin/serviceprovidercount`);
        const serviceRes = await axios.get(`${import.meta.env.VITE_API_URL}/admin/servicecount`);

        setCustomerCount(customerRes.data);
        setServiceProviderCount(serviceProviderRes.data);
        setServiceCount(serviceRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Customers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#007bff' }}>{customerCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Service Providers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{serviceProviderCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Services</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{serviceCount}</p>
        </div>
      </div>
    </div>
  );
}