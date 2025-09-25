import { Routes, Route, Link } from 'react-router-dom';
import './customer.css';
import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import CustomerLogin from './CustomerLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';
import BookedServices from './BookedServices';
import ViewAllServices from './ViewAllServices';
import BookService from './BookService';

export default function CustomerNavBar()
{
  const { setIsCustomerLoggedIn } = useAuth();

  const handleLogout = () =>
 {
    setIsCustomerLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Home Services Customer</div>
        <ul className="nav-links">
          <li><Link to="/customerhome">Home</Link></li>
          <li><Link to="/customerprofile">Customer Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewallservices">Book a New Service</Link></li>
          <li><Link to="/bookedservices">Booked Services</Link></li>
          <li><Link to="/customerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/customerhome" element={<CustomerHome />} exact />
        <Route path="/customerprofile" element={<CustomerProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/viewallservices" element={<ViewAllServices/>} exact />
        <Route path="/bookservice" element={<BookService/>} />
        <Route path="/bookedservices" element={<BookedServices/>} exact />
        <Route path="/customerlogin" element={<CustomerLogin />} exact />
      </Routes>
    </div>
  );
}
