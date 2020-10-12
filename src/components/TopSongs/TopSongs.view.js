import React from 'react';

import PropTypes from 'prop-types';
import { FaSpotify } from 'react-icons/fa';

import SongCard from '../SongInfo';
import './TopSongs.scss';

const propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array,
  error: PropTypes.string,
};

const TopSongsView = (props) => {
  const { data: songs, status, title, error } = props;

  if (status === 'pending') {
    return null;
  } else if (status === 'resolved') {
    return (
      <div className="top-songs-component">
        <div className="title">
          <FaSpotify className="mr-1" /> My Top Songs
        </div>
        <div className="sub-title">{title}</div>

        {songs.map((song, index) => {
          return <SongCard key={song.id} rank={index + 1} song={song} />;
        })}

        <div className="site-address">www.mytopsongs.site</div>
      </div>
    );
  } else if (status === 'rejected') {
    return <p className="mt-4">{error}</p>;
  }
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
