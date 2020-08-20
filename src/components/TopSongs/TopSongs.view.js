import React from 'react';

import PropTypes from 'prop-types';
import { FaSpotify } from 'react-icons/fa';

import SongCard from '../SongInfo';
import './TopSongs.scss';

const propTypes = {
  loading: PropTypes.bool,
  elementId: PropTypes.string,
  listTitle: PropTypes.string,
  onDownloadClick: PropTypes.func,
};

const TopSongsView = (props) => {
  const { songs, loading, listTitle } = props;

  return !loading ? (
    <div className="top-songs-component">
      <div className="title">
        <FaSpotify className="mr-1" /> My Top Songs
      </div>
      <div className="sub-title">{listTitle}</div>

      {songs.map((song, index) => {
        return <SongCard key={song.id} rank={index + 1} song={song} />;
      })}

      <div className="site-address">www.mytopsongs.site</div>
    </div>
  ) : null;
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
