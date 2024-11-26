import React from 'react';
import './ContactUs.css'; // Import updated styles

const ContactUs = () => (
  <section className="container contact-section my-5">
    <h2 className="section-title">Contact Us</h2>
    <p className="section-description">Have questions or need help? Drop us a message, and we’ll get back to you as soon as possible!</p>
    <div className="contact-card">
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
        </div>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>
    </div>
  </section>
);

export default ContactUs;
