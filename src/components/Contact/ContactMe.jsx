import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ch8tdn1', 'template_2kf6ki4', form.current, 'ECY24b_FzAY4Jn0Sy')
      .then((response) => {
        setSuccessMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setErrorMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="text-white p-4 rounded mt-5" style={{ textAlign: "left" }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="mb-4">
              <h2 className="custom-heading mb-3">Contact Me</h2>
              <p>If you have any questions or just want to get in touch, feel free to reach out using the form below:</p>
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
              {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
              {errorMessage && <div className="mt-3 alert alert-danger">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
