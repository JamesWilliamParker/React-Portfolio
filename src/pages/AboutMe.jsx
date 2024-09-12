import React from 'react';
import '../assets/css/aboutMe.css'; // Make sure the path is correct
import profileImage from '../assets/images/IMG_20240516_155138_687.jpg';

const AboutMe = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>Welcome to the About Me section.</p>
    <p>Here, you’ll find information about my background, skills, and experiences.</p>
    <div className="about-me">
    <img src={profileImage} alt="Image of James Parker Web Developer" />
    <p>Hello, my name James Parker. I am a Jr. Web Developer with a passion for building web applications!</p>
  </div>
  </section>
);

export default AboutMe;
