// Task 1
import React from 'react';
import 'header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">John Doe</h1>
    </header>
  );
};

// Task 2
import React from 'react';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>I am Captin Jack Sparrow. You savy.</p>
    </section>
  );
};

//Task 3
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section>
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        {/* Add LinkedIn or other contact details */}
      </section>
    );
  }
}


// Task 4
import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
};


export default About; Header; Contact; App;