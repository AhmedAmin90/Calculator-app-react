import React from 'react';
import './About.css';

const About = () => (
  <div className="About">
    <div className="hero-section-text">
      <h1>
        AHMED AMIM
        <br />
        {' '}
        WEB DEVELOPER
      </h1>
      <p className="my-description">
        I’m a software developer! I can help you build a product
        , feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded, don’t hestiate to contact me.
      </p>
      <p className="connect-text"> lets Connect</p>
      <ul className="social-icons">
        <li>
          {' '}
          <a href="https://twitter.com/AhmedAmin12383" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter" />
            {' '}
            {' '}
          </a>
          {' '}
        </li>
        <li>
          {' '}
          <a href="https://www.linkedin.com/in/web-developer/" target="_blank" rel="noreferrer">
            {' '}
            <i className="fab fa-linkedin-in" />
            {' '}
          </a>
          {' '}
        </li>
        <li>
          {' '}
          <a href="https://github.com/AhmedAmin90" target="_blank" rel="noreferrer">
            {' '}
            <i className="fab fa-github" />
            {' '}
          </a>
        </li>
        <li>
          {' '}
          <a href="https://angel.co/u/ahmed-amin-22" target="_blank" rel="noreferrer">
            {' '}
            <i className="fab fa-angellist" />
            {' '}
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.facebook.com/ahmed.amin.7564" target="_blank" rel="noreferrer">
            {' '}
            <i className="fab fa-facebook-f" />
            {' '}
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
