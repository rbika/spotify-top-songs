import React from 'react';

import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import SongCard from '../SongCard';
import constants from '../../constants';
import './TopSongs.scss';

const propTypes = {
  loading: PropTypes.bool,
};

const TopSongsView = (props) => {
  const { songs, loading, timeRange } = props;
  const title =
    timeRange === constants.SHORT_TERM ? 'Last month' : 'Last 6 months';

  return !loading ? (
    <div className="top-songs-component">
      <div className="title">{title}</div>
      <Row>
        {songs.map((song, index) => {
          return (
            <Col key={song.id} sm={6} lg={4} className="mb-4">
              <SongCard rank={index + 1} song={song} />
            </Col>
          );
        })}
      </Row>
    </div>
  ) : null;
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
