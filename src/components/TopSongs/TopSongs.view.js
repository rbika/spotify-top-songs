import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Row, Col, Button, Modal } from 'react-bootstrap';

import SongCard from '../SongCard';
import ShareSongs from '../ShareSongs';
import constants from '../../constants';
import './TopSongs.scss';

const propTypes = {
  loading: PropTypes.bool,
};

const TopSongsView = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { songs, loading, timeRange } = props;
  const title =
    timeRange === constants.SHORT_TERM ? 'Last month' : 'Last 6 months';

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return !loading ? (
    <div className="top-songs-component">
      <div className="title">
        {title}
        <Button size="sm" className="ml-2" onClick={handleShowModal}>
          Share
        </Button>
      </div>

      <Row>
        {songs.map((song, index) => {
          return (
            <Col key={song.id} sm={6} lg={4} className="mb-4">
              <SongCard rank={index + 1} song={song} />
            </Col>
          );
        })}
      </Row>

      <Modal
        size="sm"
        className="share-songs-modal"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Body>
          <ShareSongs songs={songs} />
        </Modal.Body>
      </Modal>
    </div>
  ) : null;
};

TopSongsView.propTypes = propTypes;
export default TopSongsView;
