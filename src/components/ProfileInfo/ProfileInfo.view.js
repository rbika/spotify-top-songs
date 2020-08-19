import React from 'react';

import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import LogoutButton from '../LogoutButton';
import './ProfileInfo.scss';

const propTypes = {
  profile: PropTypes.object.isRequired,
};

const ProfileInfoView = (props) => {
  const { display_name: displayName, images } = props.profile;

  return displayName && images.length ? (
    <div className="profile-info-component">
      <img alt="user" className="user-picture" src={images[0].url} />
      <div className="username-container">
        <div className="username">{displayName}</div>
        <LogoutButton />
      </div>
    </div>
  ) : (
    <FaSpinner className="profile-loader spin" />
  );
};

ProfileInfoView.propTypes = propTypes;
export default ProfileInfoView;
