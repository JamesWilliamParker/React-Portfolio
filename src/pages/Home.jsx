import React from 'react';

const AboutMe = () => <div>About Me Section</div>;
const Portfolio = () => <div>Portfolio Section</div>;
const Contact = () => <div>Contact Section</div>;
const Resume = () => <div>Resume Section</div>;
const Home = () => (
  <div>
    <AboutMe />
    <Portfolio />
    <Contact />
    <Resume />
  </div>
);

export { AboutMe, Portfolio, Contact, Resume, Home };
