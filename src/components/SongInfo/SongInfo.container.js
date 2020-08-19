import React from 'react';

import PropTypes from 'prop-types';

import SongInfoView from './SongInfo.view';

const propTypes = {
  song: PropTypes.object.isRequired,
};

function SongInfoContainer(props) {
  const { song, rank } = props;

  const handlePlayClick = () => {
    window.open(song.external_urls.spotify, '_blank');
  };

  return <SongInfoView rank={rank} song={song} onClick={handlePlayClick} />;
}

SongInfoView.propTypes = propTypes;
export default SongInfoContainer;
