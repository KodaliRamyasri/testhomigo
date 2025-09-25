import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateServiceProviderProfile() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    company_name: '',
    company_location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedServiceProvider = sessionStorage.getItem('serviceProvider');
    if (storedServiceProvider) {
      setFormData(JSON.parse(storedServiceProvider));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/serviceprovider/updateprofile`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        sessionStorage.setItem('serviceProvider', JSON.stringify(formData)); // Update local session data
      }
    } catch (error) {
      setMessage('');
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Update Profile</h3>
      {
        message ?
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> :
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required disabled>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required disabled />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>
        <div>
          <label>Company Name</label>
          <input type="text" id="company_name" value={formData.company_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Company Location</label>
          <input type="text" id="company_location" value={formData.company_location} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
