/* eslint-disable max-len */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import './Style.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_3oyxaj8';
    const templateID = 'template_54vipmc';

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="contact-me" id="contact">
        <div className="content">
          <h1>
            Contact me
          </h1>
          <p className="contact-text">
            If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it
          </p>
          <form id="myform" className="my-form">
            <div className="inputs">
              <input name="user_name" type="text" placeholder="Name" maxLength="30" value={name} onChange={(e) => setName(e.target.value)} required />
              <input id="email" name="user_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <textarea name="message" cols="30" rows="10" placeholder="Write your message here" maxLength="500" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" className="form-btn" onClick={handleSubmit}>Get In Touch</button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Contact;
