import NotFoundImage from './notfound.jpg';
import './style.css'

export default function PageNotFound() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <img src={NotFoundImage} alt="Page Not Found" className="not-found-image" />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#666' }}>
          Don't worry! You can go back to our <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>homepage</a> to find the services you need.
        </p>
      </div>
    </div>
  );
}
