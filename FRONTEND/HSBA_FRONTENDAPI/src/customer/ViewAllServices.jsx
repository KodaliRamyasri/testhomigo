import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './customer.css'; // Include the custom CSS

export default function ViewAllServices() {
  const [services, setServices] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    serviceProvider: '',
    category: '',
    serviceName: '',
    description: '',
    servicePrice: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/customer/viewallservices`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleBookClick = (serviceId) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }

    navigate(`/bookservice?serviceid=${serviceId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredServices = services.filter(service => {
    return (
      service.id.toString().includes(searchTerms.id) &&
      service.serviceProvider.name.toLowerCase().includes(searchTerms.serviceProvider.toLowerCase()) &&
      service.category.toLowerCase().includes(searchTerms.category.toLowerCase()) &&
      service.serviceName.toLowerCase().includes(searchTerms.serviceName.toLowerCase()) &&
      service.description.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      service.servicePrice.toString().includes(searchTerms.servicePrice)
    );
  });

  return (
    <div className="event-container">
      <h3 className="event-heading">Available Services</h3>
      <table className="event-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Provider</th>
            <th>Category</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'id')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'serviceProvider')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'category')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'serviceName')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'description')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'servicePrice')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.serviceProvider.name}</td>
                <td>{service.category}</td>
                <td>{service.serviceName}</td>
                <td>{service.description}</td>
                <td>${service.servicePrice}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(service.id)}>Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No matching services found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}