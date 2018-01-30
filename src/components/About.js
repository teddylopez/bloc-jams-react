import React, { Component } from 'react';
import './../styles/landing.css';

class About extends Component {
  render() {
    return (
      <div className="container about">
        <h1>Welcome to TedTunes</h1>
        <h3>I made this site to host my music.</h3>
        <p>It is built using React and some heavy distortion.</p>
      </div>
    );
  }
}

export default About;
