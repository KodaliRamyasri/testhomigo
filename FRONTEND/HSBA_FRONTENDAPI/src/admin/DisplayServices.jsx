
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayServices = () =>
{
  const [services, setServices] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [serviceDetails, setServiceDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/service/viewallservices`);
      setServices(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch services: ' + err.message);
    }
  };

  const fetchServiceById = async (id) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/service/displayservicebyid?sid=${id}`);
      setServiceDetails(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching service: ' + err.message);
    }
  };

  const handleSelection = (e) =>
  {
    const id = e.target.value;
    setSelectedId(id);
    if (id)
    {
      fetchServiceById(id);
    }
    else
    {
      setServiceDetails(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Display Service Details</h3>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="form-group mb-3">
        <label><strong>Select a Service:</strong></label>
        <select className="form-control" value={selectedId} onChange={handleSelection}>
          <option value="">-- Select Service --</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {serviceDetails && (
        <div className="card mt-3">
          <img
            src={`${import.meta.env.VITE_API_URL}/service/displayserviceimage?id=${serviceDetails.id}`}
            className="card-img-top"
            alt="Service"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{serviceDetails.name}</h5>
            <p className="card-text">
              <strong>Category:</strong> {serviceDetails.category}<br />
              <strong>Description:</strong> {serviceDetails.description}<br />
              <strong>Cost:</strong> ₹{serviceDetails.cost}<br />
              <strong>Service Provider ID:</strong> {serviceDetails.serviceProviderId}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayServices;
