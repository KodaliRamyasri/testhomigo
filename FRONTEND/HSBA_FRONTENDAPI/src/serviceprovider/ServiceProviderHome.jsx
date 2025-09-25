
import { useState,useEffect } from 'react';

export default function ServiceProviderHome()
{
     const [serviceProvider, setServiceProvider] = useState("");

     useEffect(() => {
       const storedServiceProvider = sessionStorage.getItem('serviceProvider');
       if (storedServiceProvider) {
         setServiceProvider(JSON.parse(storedServiceProvider));
       }
     }, []);

  return (
    <div>
      <h3>Hello {serviceProvider.name}</h3>
    </div>
  )
}
