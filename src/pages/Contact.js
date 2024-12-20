import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Let's Collaborate</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name *
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email *
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message *
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
