import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import your CSS file
import {toast} from 'react-toastify'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    organisationName: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/Contact`,
        formData
      );

      console.log('Contact form submitted successfully:', response.data);
      toast.success("We Contact You in Next 24Hours")
      window.location.href="/"
      // You can handle success here (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // You can handle errors here (e.g., show an error message)
    }
  };

  return (
    <div className="contact-form">
      <h2 className='head'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-input">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            className="contact-input Prefix-contact"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-input">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="contact-input Prefix-contact"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-input">
          <label htmlFor="organisationName">Organisation Name:</label>
          <input
            type="text"
            id="organisationName"
            name="organisationName"
            className="contact-input Prefix-contact"
            value={formData.organisationName}
            onChange={handleChange}
          />
        </div>

        <div className="contact-input">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="contact-input Prefix-contact"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="contact-input">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="contact-input Prefix-contact"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn Prefix-contact">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
