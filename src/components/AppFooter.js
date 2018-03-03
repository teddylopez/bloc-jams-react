import React, { Component } from 'react';

class AppFooter extends Component {
  render(props) {
    const style = {
      fontSize: '15px',
      marginTop: '10rem',
      padding: '2.5em 5%',
      display: 'block'
    };
    return (
      <footer style={style}>
        <p className="copyright">
          &copy; 2018 Ted López  <a href="http://github.com/teddylopez" target="_blank" rel="noopener noreferrer"><span className="ion-social-octocat"></span></a>
        </p>
      </footer>
    );
  }
}

export default AppFooter
