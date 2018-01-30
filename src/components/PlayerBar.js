import React, { Component } from 'react';
import './../styles/player_bar.css';
import * as utils from './../scripts/utilities';

class PlayerBar extends Component {
  constructor(props) {
    super(props);
    this.state = { volume: 5, position: 0 };
  }
  formatTime(time) {
    const timeInSeconds = Math.floor(parseFloat(time))
    const minutes = Math.floor(timeInSeconds / 60)
    const remainingSeconds = timeInSeconds - (minutes * 60)
    return minutes + ":" + remainingSeconds
  }

  render() {
    return (

      <section className={"player-bar" + (!this.props.currentSong  ? "" : " active")}>
        <button className="close ion-close clear-style" onClick={this.props.stopSong}></button>
          <div className="container">
            <div className="row align-items-center">

              <div className="col-sm">
                <button id="previous" onClick={this.props.handlePrevClick} className="previous clear-style ion-skip-backward" >
                </button>
                <button id="play-pause" onClick={this.props.handleSongClick} className="clear-style" >
                <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                </button>
                <button id="next" onClick={this.props.handleNextClick} className="next clear-style ion-skip-forward">
                </button>
              </div>

              <div className="col-sm">
                <h4 className="song-name">{this.props.currentSong ? this.props.currentSong.title : ''}</h4>
                <div className="seek-control">
                  <input
                    type="range"
                    id="seek-bar"
                    className="seek-bar"
                    value={(this.props.currentTime / this.props.duration) || 0}
                    max="1"
                    min="0"
                    step="0.01"
                    onChange={this.props.handleTimeChange}
                  />
                  <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                  <div className="total-time">{this.formatTime(this.props.duration)}</div>
                  <h2 className="artist-song-mobile"></h2>
                  <p className="artist-name">{this.props.artist}</p>
                </div>
              </div>

              <div className="col-sm">
                <input type="range" className="volume" value={this.state.volume} id="volume" min="0" max="10" onChange={this.volumeHandler} />
                <span className={"icon volume-icon" + (this.state.volume < 1 ? " ion-volume-mute" : (this.state.volume < 3 ? " ion-volume-low" : (this.state.volume < 7 ? " ion-volume-medium" : " ion-volume-high")))}></span>
                <div className="volume-number">

                </div>
              </div>

            </div>
          </div>
        </section>
    );
  }
}

export default PlayerBar;
