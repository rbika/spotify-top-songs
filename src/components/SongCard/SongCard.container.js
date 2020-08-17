import React from 'react';

import PropTypes from 'prop-types';

import SongCardView from './SongCard.view';

const propTypes = {
  song: PropTypes.object.isRequired,
};

function SongCardContainer(props) {
  const { song, rank } = props;

  const handlePlayClick = () => {
    window.open(song.external_urls.spotify, '_blank');
  };

  return <SongCardView rank={rank} song={song} onClick={handlePlayClick} />;
}

SongCardView.propTypes = propTypes;
export default SongCardContainer;
