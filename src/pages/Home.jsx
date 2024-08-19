/* eslint-disable max-len */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Style.css';

import Navbar from '../components/Navbar';
import Works from '../components/works';
import Skills from '../../skills';

emailjs.init('Yo3Wc42ylV2swX0C3');

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const errDisplay = document.querySelector('.message');
  const html = document.querySelector('html');

  const generateLinks = () => (
    <ul className="socials">
      <li className="icons">
        <a href="https://www.facebook.com/shakir.hussain.560/">
          <img src="./images/Facebook.png" alt="Facebook" />
        </a>
      </li>
      <li className="icons">
        <a href="https://twitter.com/S_Hussain_99">
          <img src="./images/Twitter.png" alt="Twitter" />
        </a>
      </li>
      <li className="icons">
        <a href="https://github.com/Shakir-Hussain12">
          <img src="../images/GitHub.png" alt="GitHub" />
        </a>
      </li>
      <li className="icons">
        <a href="https://www.linkedin.com/in/shakir-hussain99/">
          <img src="../images/LinkedIn.png" alt="LinkedIn" />
        </a>
      </li>
    </ul>
  );

  html.onclick = () => {
    if (errDisplay) {
      errDisplay.classList.remove('active');
    }
  };

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
      <section className="headline">
        <div className="left-head">
          <h2>Hello!</h2>
          <h4>I&apos;m Shakir Hussain </h4>
          <p className="body-text">
            I’m a Full-stack developer and I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
          </p>
          <a className="contact-btn" href="#contact">Contact Here</a>
          <p href="/" className="connect">
            Let&apos;s connect
          </p>
          {generateLinks()}
        </div>
        <div className="right-head">
          <div className="thumbnail">
            <img src="./images/Profile.jpg" alt="myPicture" id="head-img" />
          </div>
        </div>
      </section>
      {/* <!-- Works Section --> */}
      <Works />
      {/* <!-- about myself --> */}
      <section className="about" id="about-myself">
        <div className="personal-info">
          <h1>
            About
            {' '}
            <br />
            Myself
          </h1>
          <p className="body-text">
            Hi, I am Shakir Hussain. Full-stack Developer with a combined experience of 1+ years with HTML, CSS, JavaScript, React, Ruby on Rails and remote web development. Apart from Full-stack development, I am also a lab instructor at the university of FAST-NUCES.
          </p>
          <a href="/" className="connect">
            Let&apos;s connect
          </a>
          {generateLinks()}
          <a className="resume-button" href="./docs/Shakir_Hussain_Resume.pdf" download="Shakir-Hussain-Resume">Get My Resume</a>
        </div>
        <div className="skills">
          <h2>Skills & Tools</h2>
          <ul>
            {
              Skills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      {/* <!-- contact section --> */}
      <footer className="contact-me" id="contact">
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
      </footer>
    </div>
  );
};

export default Home;
