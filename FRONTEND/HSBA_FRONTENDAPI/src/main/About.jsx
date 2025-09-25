import "./About.css";

export default function About() {
  return (
      <div className="about-container">
  <div className="about-card">
    <h2 className="about-title">About Home Services Booking</h2>

    <div className="about-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="Home Services"
        className="about-image"
      />
    </div>

    <div className="about-content">
      <p>
        <strong>Home Services Booking</strong> is your trusted platform for connecting with professional
        service providers in your local area. We make it easy to find and book reliable home services,
        from cleaning and repairs to maintenance and improvements.
      </p>

      <p>
        Our platform brings together verified service providers and customers, ensuring quality service
        and peace of mind. Whether you need a plumber, electrician, cleaner, or any other home service
        professional, we have you covered.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>Verified and professional service providers</li>
        <li>Easy booking and scheduling system</li>
        <li>Transparent pricing and reviews</li>
        <li>Secure payment processing</li>
        <li>24/7 customer support</li>
      </ul>

      <p>
        Join thousands of satisfied customers who trust our platform for their home service needs.
        Experience the convenience of professional services at your fingertips.
      </p>
    </div>
  </div>
</div>
  );
}
