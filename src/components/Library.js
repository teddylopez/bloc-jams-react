import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/library.css';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

  render() {
    return (
      <section className='library album-covers container'>
      <div className="row">
      {
        this.state.albums.map( (album, index) =>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 album">
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <span className="album-name">{album.title}</span>
              <br />
              <span className="artist-name">{album.artist}</span>
              <div className="label">{album.songs.length} songs</div>
            </Link>
          </div>
        )
        }
      </div>
      </section>
    );
  }
}

export default Library;
