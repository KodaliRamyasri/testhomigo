
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [serviceProviderId, setServiceProviderId] = useState(null);

  useEffect(() => {
    const storedServiceProvider = sessionStorage.getItem('serviceProvider');
    if (storedServiceProvider) {
      const serviceProvider = JSON.parse(storedServiceProvider);
      setServiceProviderId(serviceProvider.id);
      fetchBookings(serviceProvider.id);
    } else {
      setError('Service Provider not logged in.');
    }
  }, []);

  const fetchBookings = async (serviceProviderId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/serviceprovider/viewbookingsbyprovider/${serviceProviderId}`);
      setBookings(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch bookings');
      setBookings([]);
    }
  };

  const updateStatus = async (bookingId, status) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/serviceprovider/updatebookingstatus`, null, {
        params: {
          id: bookingId,
          status: status
        }
      });
      toast.success(response.data);
      fetchBookings(serviceProviderId); // Refresh the bookings list
    } catch (err) {
      toast.error('Failed to update booking status');
      console.error(err);
    }
  };
  
  
  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Bookings for My Services</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No bookings available for your services.</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Booking ID</th>
              <th>Service ID</th>
              <th>Service Name</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Service Start Date</th>
              <th>Service End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.service.id}</td>
                <td>{booking.service.serviceName}</td>
                <td>{booking.customer.name}</td>
                <td>{booking.customer.email}</td>
                <td>{new Date(booking.serviceStartDate).toLocaleDateString()}</td>
                <td>{new Date(booking.serviceEndDate).toLocaleDateString()}</td>
                <td>{booking.status}</td>
                <td>
                      <button
                        onClick={() => updateStatus(booking.id, 'ACCEPTED')}
                        style={{ marginRight: '5px', backgroundColor: 'green', color: 'white' }}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateStatus(booking.id, 'REJECTED')}
                        style={{ backgroundColor: 'red', color: 'white' }}
                      >
                        Reject
                      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
