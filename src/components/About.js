import React, { Component } from 'react';
import './../styles/about.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="header">Welcome to TEDNESS</div>
        <div className="about">
          <div className="segment">
            <h3>I made this site to host my music. It is built using React and some heavy distortion.</h3>
          </div>
          <div className="header">Complain To Me</div>
          <div className="segment-bottom">
            <h3>Send me your hatemail <a className="mail-to" href="mailto:tedmlopez@gmail.com?subject=Mail%20from%20TEDNESS">here</a>.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
