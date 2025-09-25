import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Trusted Partner for Home Services</h1>
          <p>Book reliable, verified professionals at your fingertips.</p>
          
        </div>
      </section>

      {/* Info Cards */}
      <div className="home-container">
        <h2 className="home-title">What We Offer</h2>

        <div className="home-card">
          <h3>About Us</h3>
          <p>
            Home Services is your one-stop solution for all household needs.
            Whether it’s cleaning, plumbing, electrical work, or appliance
            repair, we connect you with trusted professionals at your
            convenience.
          </p>
        </div>

        <div className="home-card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Reliable & verified service providers</li>
            <li>✔ Affordable and transparent pricing</li>
            <li>✔ Easy online booking in just a few clicks</li>
            <li>✔ Customer support available 24/7</li>
          </ul>
        </div>

        <div className="home-card">
          <h3>Our Mission</h3>
          <p>
            To make every household task simple, stress-free, and reliable by
            connecting customers with skilled professionals instantly.
          </p>
        </div>

        <div className="home-card">
          <h3> Get Started</h3>
          <p>
            Book a service today and experience hassle-free home solutions at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
