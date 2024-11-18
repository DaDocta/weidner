import React from 'react';
import '../styles/Contact.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="form-control"
          placeholder="Enter your message"
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default ContactForm;
