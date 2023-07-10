/* eslint-disable max-len */
import React, { useState } from 'react';
import './Style.css';

import Navbar from '../components/Navbar';
import Works from '../components/works';

const Home = () => {
  const [email, setEmail] = useState('');
  const errDisplay = document.querySelector('.message');
  const form = document.querySelector('#myform');
  const html = document.querySelector('html');

  html.onclick = () => {
    if (errDisplay) {
      errDisplay.classList.remove('active');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const str = email.toLowerCase();
    if (email !== str) {
      errDisplay.classList.add('active');
    } else {
      form.submit();
    }
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <section className="headline">
        <h1>
          I’m Shakir
          {' '}
          <br />
          Glad to see you!
        </h1>
        <p className="body-text">
          I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
        </p>
        <a href="/" className="connect">
          Let&apos;s connect
        </a>
        <ul className="socials">
          <li className="icons">
            <a href="/">
              <img src="../images/Vector-1.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="../images/Linkedin icon.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="../images/Vector.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="../images/Vector.svg" alt="Not Found" />
            </a>
          </li>
        </ul>
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
            I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
          </p>
          <a href="/" className="connect">
            Let&apos;s connect
          </a>
          <ul className="socials">
            <li className="icons">
              <a href="/">
                <img src="../images/Vector-1.png" alt="Not Found" />
              </a>
            </li>
            <li className="icons">
              <a href="/">
                <img src="../images/Linkedin icon.png" alt="Not Found" />
              </a>
            </li>
            <li className="icons">
              <a href="/">
                <img src="../images/Vector.png" alt="Not Found" />
              </a>
            </li>
            <li className="icons">
              <a href="/">
                <img src="../images/Vector.svg" alt="Not Found" />
              </a>
            </li>
          </ul>
          <a href="/" className="resume-button">Get My Resume</a>
        </div>
        <div className="skill-list">
          <ul>
            <li>
              <span className="list-item">
                Languages
                {' '}
                <span><img src="../images/Disabled.png" alt="languages" /></span>
              </span>
              <ul className="desk-languages">
                <li className="sub-language">
                  <a href="/"><img src="../images/Ellipse 1.png" alt="JS" /></a>
                  <span className="inside-text">
                    JavaSript
                  </span>
                </li>
                <li className="sub-language">
                  <a href="/"><img src="../images//Ellipse 1 (1).png" alt="HTML" /></a>
                  <span className="inside-text">
                    HTML
                  </span>
                </li>
                <li className="sub-language">
                  <a href="/"><img src="../images//Ellipse 1 (2).png" alt="CSS" /></a>
                  <span className="inside-text">
                    CSS
                  </span>
                </li>
              </ul>
            </li>
            <li className="list-item">
              Frameworks
              {' '}
              <span><img src="../images/Enabled.png" alt="frameworks" /></span>
            </li>
            <li>
              <hr className="solid" />
            </li>
            <li className="list-item">
              Skills
              {' '}
              <span><img src="../images/Enabled.png" alt="Skills" /></span>
            </li>
            <li>
              <hr className="solid" />
            </li>
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
          <form action="https://formspree.io/f/myyvrwaj" id="myform" className="my-form" method="post" onSubmit={handleSubmit}>
            <input name="user_name" type="text" placeholder="Name" maxLength="30" required />
            <input id="email" name="user_email" type="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value); }} />
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
      </footer>
    </div>
  );
};

export default Home;
