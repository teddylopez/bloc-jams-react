import React, { Component } from 'react';
import './../styles/album.css';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';


class Album extends Component {
  constructor(props) {
     super(props);

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state = {
       album: album,
       currentSong: album.songs[0],
       currentTime: 0,
       duration: album.songs[0].duration,
       isPlaying: false
     };
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }

   componentDidMount() {
     this.eventListeners = {
       timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
   }

   componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
   }

   setSong(song) {
     this.audioElement.src = song.audioSrc;
     this.setState({ currentSong: song });
   }

   play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
   }

   pause() {
     this.audioElement.pause();
     this.setState({ isPlaying: false });
   }

   handleSongClick(song) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
       if (!isSameSong) { this.setSong(song); }
       this.play();
     }
   }

   handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = currentIndex + 1

    if (newIndex < this.state.album.songs.length) {
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play(newSong);
    } else {
      this.play(this.state.currentSong);
    }
  }

   handlePrevClick() {
     const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
     const newIndex = Math.max(0, currentIndex - 1);
     const newSong = this.state.album.songs[newIndex];
     this.setSong(newSong);
     this.play(newSong);
   }

   handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
   }

  render() {
    return (
      <div className="container">
        <section className="album">
          <section id="album-info" className="clearfix">
            <div className="cover-art">
               <img id="album-cover-art" src={this.state.album.albumCover} alt="cover" />
            </div>
             <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
             </div>
           </section>

          <div className="song-table">
           <table id="song-list" className="album-view-song-list">
             <thead>
              <tr>
                <td className="song-item-number">Track</td>
                <td className="song-item-title">Track Title</td>
                <td className="song-item-duration">Track Length</td>
                <td className="song-item-play-count">Total Plays</td>
              </tr>
            </thead>
            <tbody>
            {
              this.state.album.songs.map(( song, index ) =>
                <tr className={"album-view-song-item"+(this.props.selected ? ' selected' : "") + (this.props.playing ? 'playing' : "")}data-song-index={this.props.index}>
                <td className="song-item-number" data-song-number={index+1}>
                  <button className={"album-song-button clear-style"+(this.props.selected ? " ion-stop" : " ion-play")} onClick={() => this.handleSongClick(song)}>
                  </button>
                </td>
                  <td className="song-item-title">
                    {song.title}
                    <div className="sound-bars">
                      <div className="bar bar1"></div>
                      <div className="bar bar2"></div>
                      <div className="bar bar3"></div>
                      <div className="bar bar4"></div>
                    </div>
                    </td>
                  <td className="song-duration">{song.duration}</td>
                  <td className="song-duration">{song.playCount}</td>
                </tr>
              )
            }
             </tbody>
           </table>
         </div>
         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           currentTime={this.audioElement.currentTime}
           duration={this.audioElement.duration}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
         />
        </section>
      </div>
    );
  }
}

export default Album;
