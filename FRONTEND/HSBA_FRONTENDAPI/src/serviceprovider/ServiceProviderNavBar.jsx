import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './serviceprovider.css';
import ServiceProviderHome from './ServiceProviderHome';
import ServiceProviderProfile from './ServiceProviderProfile';
import UpdateServiceProviderProfile from './UpdateServiceProviderProfile';
import ServiceProviderLogin from './ServiceProviderLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddService from './AddService';
import ViewServicesByServiceProvider from './ViewServicesByServiceProvider';
import ViewBookings from './ViewBookings';

export default function ServiceProviderNavBar()
{
  const { setIsServiceProviderLoggedIn } = useAuth();

  const handleLogout = () =>
 {
  setIsServiceProviderLoggedIn(false);
  sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Service Provider</div>
        <ul className="nav-links">
          <li><Link to="/serviceproviderhome">Home</Link></li>
          <li><Link to="/serviceproviderprofile">Service Provider Profile</Link></li>
          <li><Link to="/updateserviceproviderprofile">Update Profile</Link></li>
          <li><Link to="/addservice">Add New Service</Link></li>
          <li><Link to="/viewservicesbyserviceprovider">View Services</Link></li>
          <li><Link to="/viewbookings">View Bookings</Link></li>
          <li><Link to="/serviceproviderlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/serviceproviderhome" element={<ServiceProviderHome />} exact />
        <Route path="/serviceproviderprofile" element={<ServiceProviderProfile/>} exact />
        <Route path="/updateserviceproviderprofile" element={<UpdateServiceProviderProfile/>} exact />
        <Route path="/addservice" element={<AddService/>} exact />
        <Route path="/viewservicesbyserviceprovider" element={<ViewServicesByServiceProvider/>} exact />
        <Route path="/viewbookings" element={<ViewBookings/>} exact />
        <Route path="/serviceproviderlogin" element={<ServiceProviderLogin/>} exact />
      </Routes>
    </div>
  );
}
