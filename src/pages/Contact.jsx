/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar';
import './Style.css';

function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="contact-me" id="contact" style={{ marginTop: '10%' }}>
        <div className="content">
          <h1>
            Contact me
          </h1>
          <p className="contact-text">
            If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it
          </p>
          <form action="https://formspree.io/f/myyvrwaj" id="myform" className="my-form" method="post">
            <input name="user_name" type="text" placeholder="Name" maxLength="30" required />
            <input id="email" name="user_email" type="email" placeholder="Email" required />
            <textarea name="message" cols="30" rows="10" placeholder="Write your message here" maxLength="500" required />
            <button type="submit" className="form-btn">Get In Touch</button>
            <span className="message">
              Email Should be in lower case
              <br />
              {' '}
              <span id="innermsg">(Click Anywhere to hide this box)</span>
            </span>
            <hr className="round" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
