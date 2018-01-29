import React, { Component } from 'react';
import './../styles/player_bar.css';
import * as utils from './../scripts/utilities';
class PlayerBar extends Component {

  formatTime(time) {
    const timeInSeconds = Math.floor(parseFloat(time))
    const minutes = Math.floor(timeInSeconds / 60)
    const remainingSeconds = timeInSeconds - (minutes * 60)
    return minutes + ":" + remainingSeconds
  }

  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick} >
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">
           <div className="current-time">{this.props.currentTime}</div>
           <input
             type="range"
             className="seek-bar"
             value={(this.props.currentTime / this.props.duration) || 0}
             max="1"
             min="0"
             step="0.01"
             onChange={this.props.handleTimeChange}
           />
           <div className="total-time">{this.formatTime(this.props.duration)}</div>
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"></div>
           <input type="range" className="seek-bar" value="80" />
           <div className="icon ion-volume-high"></div>
         </section>
      </section>
    );
  }
}

export default PlayerBar;
