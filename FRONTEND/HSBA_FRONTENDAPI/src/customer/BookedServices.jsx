import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookedServices() {
  const [bookedServices, setBookedServices] = useState([]);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchBookedServices = async () => {
      const storedCustomer = sessionStorage.getItem('customer');
      if (storedCustomer) {
        const customerData = JSON.parse(storedCustomer);
        setCustomer(customerData);
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/customer/bookedservices/${customerData.id}`);
          setBookedServices(response.data);
        } catch (error) {
          console.error('Error fetching booked services:', error);
        }
      } else {
        alert('Please log in to view your booked services.');
      }
    };

    fetchBookedServices();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Booked Services</h3>
      {customer ? (
        <div>
          <table style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th>Booking ID</th>
                <th>Service Category</th>
                <th>Service Name</th>
                <th>Service Start Date</th>
                <th>Service End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                bookedServices.length > 0 ? bookedServices.map((service, index) => (
                  <tr key={index}>
                    <td>{service.id}</td>
                    <td>{service.service.category}</td>
                    <td>{service.service.serviceName}</td>
                    <td>{new Date(service.serviceStartDate).toLocaleDateString()}</td>
                    <td>{new Date(service.serviceEndDate).toLocaleDateString()}</td>
                    <td>{service.status}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="6">No booked services found.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading your customer details...</p>
      )}
    </div>
  );
}