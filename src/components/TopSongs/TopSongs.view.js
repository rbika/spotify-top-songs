import React from 'react';

import PropTypes from 'prop-types';
import { FaSpotify } from 'react-icons/fa';

import SongCard from '../SongInfo';
import constants from '../../constants';
import './TopSongs.scss';
// import { Button } from 'react-bootstrap';

const propTypes = {
  loading: PropTypes.bool,
};

const TopSongsView = (props) => {
  const { songs, loading, timeRange } = props;
  const { SHORT_TERM } = constants;
  const title = timeRange === SHORT_TERM ? 'Last month' : 'Last 6 months';

  return !loading ? (
    <div className="top-songs-component">
      <div className="title">
        <FaSpotify className="mr-1" /> My Top Songs
      </div>
      <div className="sub-title">{title}</div>

      {songs.map((song, index) => {
        return <SongCard key={song.id} rank={index + 1} song={song} />;
      })}

      <div className="site-address">www.mytopsongs.site</div>

      {/* <div className="download-btn-container">
        <Button>Download</Button>
        <span>And Share</span>
      </div> */}
    </div>
  ) : null;
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
