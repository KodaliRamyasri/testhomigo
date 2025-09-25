import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function ViewServiceProviders()
{
    const [serviceProviders, setServiceProviders] = useState([]);
    const [error, setError] = useState("");
    const [expandedProvider, setExpandedProvider] = useState(null);
    const [services, setServices] = useState([]);
    const displayServiceProviders = async () =>
      {
        try
        {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/viewallserviceproviders`);
            setServiceProviders(response.data);
        }
        catch (err)
        {
            setError("Failed to fetch service providers data ... " + err.message);
        }
    };

    useEffect(() => {
      displayServiceProviders();
    }, []);

    const deleteServiceProvider = async (spid) =>
        {
            try
           {
                const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/deleteserviceprovider/${spid}`);
                toast.success(response.data);
                await displayServiceProviders();
            }
            catch (err)
            {
                toast.error("Failed to delete service provider: " + err.message);
            }
        };

    return (
        <div style={{ padding: "20px" }}>
            <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
                <u>View All Service Providers</u>
            </h3>

            {error ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    {error}
                </p>
            ) : serviceProviders.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    No Service Providers Data Found
                </p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Mobile No</th>
                            <th>Company Name</th>
                            <th>Company Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceProviders.map((serviceProvider) => (
                            <tr key={serviceProvider.id}>
                                <td>{serviceProvider.id}</td>
                                <td>{serviceProvider.name}</td>
                                <td>{serviceProvider.gender}</td>
                                <td>{serviceProvider.dob}</td>
                                <td>{serviceProvider.email}</td>
                                <td>{serviceProvider.username}</td>
                                <td>{serviceProvider.mobileno}</td>
                                <td>{serviceProvider.company_name}</td>
                                <td>{serviceProvider.company_location}</td>
                                <td>

                                    <Button variant="outlined" onClick={()=> deleteServiceProvider(serviceProvider.id)} startIcon={<DeleteIcon />}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}