import React from 'react';

const Landing = () => (
  <section className="landing">
  <section className="hero-content">
    <div className="hero-title">
      <h1>Turn It Up</h1>
    </div>
  </section>

    <section className="selling-points clearfix">
      <div className="point">
        <span className="ion-music-note"></span>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to anything that Ted didnt write?</p>
      </div>
      <div className="point">
        <span className="ion-radio-waves"></span>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <span className="ion-iphone"></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
