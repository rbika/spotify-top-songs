import React from 'react';

import { Container } from 'react-bootstrap';

import TopSongs from '../../components/TopSongs';
import constants from '../../constants';
import ProfileInfo from '../../components/ProfileInfo';
import './Profile.scss';

const ProfileView = () => {
  return (
    <Container className="profile-page">
      <ProfileInfo className="mb-4" />
      <TopSongs timeRange={constants.SHORT_TERM} />
      <TopSongs timeRange={constants.MEDIUM_TERM} />
    </Container>
  );
};

export default ProfileView;
