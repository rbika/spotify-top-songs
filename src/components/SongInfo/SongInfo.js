import React from 'react';

import PropTypes from 'prop-types';

import { FaHeadphones } from 'react-icons/fa';

import './SongInfo.scss';

const propTypes = {
  song: PropTypes.object.isRequired,
};

function SongInfo(props) {
  const { song, rank } = props;

  const handlePlayClick = () => {
    window.open(song.external_urls.spotify, '_blank');
  };

  return (
    <div onClick={handlePlayClick} className="song-info-component">
      <img
        alt="album-cover"
        className="album-img"
        src={song.album.images[0].url}
      />
      <div className="song-info">
        <div className="song-name">
          <span className="rank">{rank}</span>. {song.name}
        </div>
        <div className="song-artist">{song.artists[0].name}</div>

        <div className="play-button">
          <FaHeadphones className="play-icon" />
        </div>
      </div>
    </div>
  );
}

SongInfo.propTypes = propTypes;
export default SongInfo;
