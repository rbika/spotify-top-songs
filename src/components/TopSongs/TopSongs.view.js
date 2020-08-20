import React from 'react';

import PropTypes from 'prop-types';
import { FaSpotify } from 'react-icons/fa';

import SongCard from '../SongInfo';
import { Button } from 'react-bootstrap';
import './TopSongs.scss';

const propTypes = {
  loading: PropTypes.bool,
  elementId: PropTypes.string,
  listTitle: PropTypes.string,
  onDownloadClick: PropTypes.func,
};

const TopSongsView = (props) => {
  const { songs, loading, elementId, listTitle, onDownloadClick } = props;

  return !loading ? (
    <div className="top-songs-component">
      <div className="sharableContent" id={elementId}>
        <div className="title">
          <FaSpotify className="mr-1" /> My Top Songs
        </div>
        <div className="sub-title">{listTitle}</div>

        {songs.map((song, index) => {
          return <SongCard key={song.id} rank={index + 1} song={song} />;
        })}

        <div className="site-address">www.mytopsongs.site</div>
      </div>
      <div className="download-btn-container">
        <Button onClick={onDownloadClick}>Download</Button>
        <span className="text">And Share</span>
        <a href="/" class="hidden-img-link" id="image-link">
          Image Link
        </a>
      </div>
    </div>
  ) : null;
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
