import React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material'; // MUI icons
import '../assets/styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    subject: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField
            label="Enter Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            required
            margin="normal"
          />
          <div className="input-row">
            <TextField
              label="Enter your name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              label="Enter email address"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />
          </div>
          <TextField
            label="Enter Subject"
            name="subject"
            fullWidth
            value={formData.subject}
            onChange={handleChange}
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-btn"
            fullWidth={false}  
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <LocationOn />
          <p>Buttonwood, California, Rosemead, CA 91770</p>
        </div>
        <div className="info-item">
          <Phone />
          <p>00 (440) 9865 562 Mon to Fri 9am to 6pm</p>
        </div>
        <div className="info-item">
          <Email />
          <p>support@colorlib.com Send us your query anytime!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
