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
          Hi, I am Shakir Hussain. A Full-stack Developer with a combined experience of 1+ years with HTML, CSS, JavaScript, React, Ruby on Rails and remote web development. Apart from Full-stack development, I am also a lab instructor at the university of FAST-NUCES.
        </p>
        <a href="/" className="connect">
          Let&apos;s connect
        </a>
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
  </div>
);

export default About;
