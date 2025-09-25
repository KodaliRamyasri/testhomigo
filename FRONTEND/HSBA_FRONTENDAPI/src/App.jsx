import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import ServiceProviderNavBar from "./serviceprovider/ServiceProviderNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent()
{
  const { isAdminLoggedIn, isCustomerLoggedIn, isServiceProviderLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isCustomerLoggedIn ? (
          <CustomerNavBar />
        ) : isServiceProviderLoggedIn ? (
          <ServiceProviderNavBar />
        ) : (
          <MainNavBar />
        )}
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}

export default App;