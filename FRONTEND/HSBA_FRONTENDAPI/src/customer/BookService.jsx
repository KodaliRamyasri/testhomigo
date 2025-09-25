import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookService()
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get('serviceid');

  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({
    serviceStartDate: '',
    serviceEndDate: ''
  });

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem("customer");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    } else {
      toast.error("Customer not logged in!");
      navigate('/customerlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      service: { id: serviceId },
      customer: { id: customer.id },
      ...formData
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/customer/bookservice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        toast.success("Service booked successfully!");
        navigate('/bookedservices');
      } else {
        toast.error("Failed to book service.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Book Service</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div>
          <label>Service Start Date: </label>
          <input type="date" name="serviceStartDate" value={formData.serviceStartDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Service End Date: </label>
          <input type="date" name="serviceEndDate" value={formData.serviceEndDate} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}