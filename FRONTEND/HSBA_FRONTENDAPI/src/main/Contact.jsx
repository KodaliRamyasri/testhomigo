import "./Contact.css";

export default function Contact() {
  return (
  <div class="contact-container">
  <h2 class="contact-title">Contact Us</h2>

  <div class="contact-card">
    <h3>📍 Our Address</h3>
    <p>123 Royal Street, Hyderabad, Telangana, India</p>
  </div>

  <div class="contact-card">
    <h3>📞 Phone</h3>
    <p>+91 98765 43210</p>
  </div>

  <div class="contact-card">
    <h3>✉️ Email</h3>
    <p>support@homeservices.com</p>
  </div>

  <div class="contact-card">
    <h3>⏰ Working Hours</h3>
    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
    <p>Sunday: Closed</p>
  </div>
</div>

  );
}
