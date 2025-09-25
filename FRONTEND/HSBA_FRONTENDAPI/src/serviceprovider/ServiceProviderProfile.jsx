import { useState, useEffect } from 'react';

export default function ServiceProviderProfile() {
  const [serviceProvider, setServiceProvider] = useState(null);

  useEffect(() => {
    const storedServiceProvider = sessionStorage.getItem('serviceProvider');
    if (storedServiceProvider) {
      setServiceProvider(JSON.parse(storedServiceProvider));
    }
  }, []);

  if (!serviceProvider) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Service Provider Profile
      </h2>

      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {serviceProvider.name}</p>
        <p><strong>Gender:</strong> {serviceProvider.gender}</p>
        <p><strong>Date of Birth:</strong> {serviceProvider.dob}</p>
        <p><strong>Email:</strong> {serviceProvider.email}</p>
        <p><strong>Username:</strong> {serviceProvider.username}</p>
        <p><strong>Mobile No:</strong> {serviceProvider.mobileno}</p>
        <p><strong>Company Name:</strong> {serviceProvider.company_name}</p>
        <p><strong>Company Location:</strong> {serviceProvider.company_location}</p>
      </div>
    </div>
  );
}
