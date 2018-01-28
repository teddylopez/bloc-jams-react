import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/library.css';
import albumData from './../data/albums';
import AlbumThumbnail from './AlbumThumbnail';


class Library extends Component {
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

  render() {
    return (
      <div className="collection clearfix">
      <section className='album-covers container'>
      {
        this.state.albums.map( (album, index) =>

            <div className="collection-album-container column fourth">
              <div className="floats clearfix">
                <Link to={`/album/${album.slug}`} key={index}>
                  <img src={album.albumCover} alt={album.title} />
                  <div>{album.title}</div>
                  <div>{album.artist}</div>
                </Link>
              </div>
            </div>
        )
      }
      </section>
      </div>
    );
  }
}

export default Library;
