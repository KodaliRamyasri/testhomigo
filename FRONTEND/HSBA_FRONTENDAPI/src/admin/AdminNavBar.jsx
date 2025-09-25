import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddServiceProvider from './AddServiceProvider';
import ViewServiceProviders from './ViewServiceProviders';
import ViewCustomers from './ViewCustomers';
import ViewAllServices from './ViewAllServices';
import DisplayServices from './DisplayServices';
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import UpdateAdminProfile from './UpdateAdminProfile';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/addserviceprovider">Add Service Providers</Link></li>
          <li><Link to="/viewserviceproviders">View Service Providers</Link></li>
          <li><Link to="/viewallcustomers">View All Customers</Link></li>
          

          {/* Removed Services dropdown as per request */}
          {/* <li className="dropdown">
            <span>Services▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/viewallservices">View All Services</Link></li>
              <li><Link to="/displayservices">Display Services</Link></li>
            </ul>
          </li> */}

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/addserviceprovider" element={<AddServiceProvider />} exact />
        <Route path="/viewserviceproviders" element={<ViewServiceProviders />} exact />
        <Route path="/viewallcustomers" element={<ViewCustomers />} exact />
        
        <Route path="/viewallservices" element={<ViewAllServices />} exact />
        <Route path="/displayservices" element={<DisplayServices />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}