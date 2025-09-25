import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminProfile() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      const storedAdmin = sessionStorage.getItem('admin');
      if (storedAdmin) {
        const parsedAdmin = JSON.parse(storedAdmin);
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/profile?username=${parsedAdmin.username}`);
          if (response.status === 200) {
            setAdmin(response.data);
          }
        } catch (error) {
          console.error('Error fetching admin profile:', error);
          // Fallback to sessionStorage if API fails
          setAdmin(parsedAdmin);
        }
      }
    };

    fetchAdminProfile();
  }, []);

  if (!admin) {
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
        Admin Profile
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
        <p><strong>Username:</strong> {admin.username}</p>
        <p><strong>Password:</strong> {admin.password}</p>
      </div>
    </div>
  );
}
