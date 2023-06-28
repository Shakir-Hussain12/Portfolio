/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar';
import './Style.css';

const About = () => (
  <>
    <header>
      <Navbar />
    </header>
    <section className="about" id="about-myself" style={{ marginTop: '2%' }}>
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
              <img src="./images/Vector-1.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="./images/Linkedin icon.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="./images/Vector.png" alt="Not Found" />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <img src="./images/Vector.svg" alt="Not Found" />
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
              <span><img src="./images/Disabled.png" alt="languages" /></span>
            </span>
            <ul className="desk-languages">
              <li className="sub-language">
                <a href="/"><img src="./images/Ellipse 1.png" alt="JS" /></a>
                <span className="inside-text">
                  JavaSript
                  </span>
              </li>
              <li className="sub-language">
                <a href="/"><img src="./images//Ellipse 1 (1).png" alt="HTML" /></a>
                <span className="inside-text">
                  HTML
                  </span>
              </li>
              <li className="sub-language">
                <a href="/"><img src="./images//Ellipse 1 (2).png" alt="CSS" /></a>
                <span className="inside-text">
                  CSS
                  </span>
              </li>
            </ul>
          </li>
          <li className="list-item">
            Frameworks
            {' '}
            <span><img src="./images/Enabled.png" alt="frameworks" /></span>
          </li>
          <li>
            <hr className="solid" />
          </li>
          <li className="list-item">
            Skills
            {' '}
            <span><img src="./images/Enabled.png" alt="Skills" /></span>
          </li>
          <li>
            <hr className="solid" />
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default About;
