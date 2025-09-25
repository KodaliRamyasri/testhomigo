
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewServicesByServiceProvider() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [serviceProviderId, setServiceProviderId] = useState(null);

  useEffect(() => {
    const storedServiceProvider = sessionStorage.getItem('serviceProvider');
    if (storedServiceProvider) {
      const serviceProvider = JSON.parse(storedServiceProvider);
      setServiceProviderId(serviceProvider.id);
      fetchServices(serviceProvider.id);
    }
  }, []);

  const fetchServices = async (serviceProviderId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/serviceprovider/viewservicesbyprovider/${serviceProviderId}`);
      setServices(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your services');
      setServices([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Services</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {services.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No services added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Service Provider ID</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
               <tr key={service.id}>
               <td>{service.id}</td>
               <td>{service.category}</td>
               <td>{service.serviceName}</td>
               <td>{service.description}</td>
               <td>₹{service.servicePrice}</td>
               <td>{service.serviceProvider.id}</td>
             </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
