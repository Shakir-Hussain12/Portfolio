/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/Navbar';

import './Style.css';
import Skills from '../../skills';

const About = () => (
  <div className="wrapper">
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
  </div>
);

export default About;
