import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';

const ViewAllServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try
    {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/service/viewallservices`);
      setServices(response.data);
      setError('');
    }
    catch (err)
    {
      setError('Failed to fetch services. ' + err.message);
    }
  };

  return (
    <div className="product-table-container">
      <h3 className="product-heading">All Services</h3>

      <p style={{textAlign: "center",color:"green",fontWeight:"bolder"}}>{error}</p>

      <div className="table-responsive">
        <table className="product-table" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Service Provider ID</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.category}</td>
                <td>{service.description}</td>
                <td>₹{service.cost}</td>
                <td>{service.serviceProviderId}</td>
                <td>
                  <iframe
                    src={`${import.meta.env.VITE_API_URL}/service/displayserviceimage?id=${service.id}`}
                    alt="Service"
                    className="table-image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllServices;
