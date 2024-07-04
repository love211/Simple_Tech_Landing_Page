import React, { useState } from 'react';
import './ContactSection.css';
import { useNavigate } from 'react-router-dom';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully');
      navigate('/');
    } else {
      setErrors(errors);
      
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={errors.name ? 'input-error' : ''}
          />
          {name ? <span></span> : errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={errors.email ? 'input-error' : ''}
          />
          {email?<span></span>:errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default ContactSection;
