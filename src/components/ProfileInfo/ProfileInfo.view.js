import React from 'react';

import PropTypes from 'prop-types';
import { FaSpinner, FaUserCircle } from 'react-icons/fa';

import LogoutButton from '../LogoutButton';
import './ProfileInfo.scss';

const propTypes = {
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const ProfileInfoView = (props) => {
  const { loading, profile } = props;
  const { display_name: displayName, images } = profile;

  return !loading ? (
    <div className="profile-info-component">
      <div className="user-picture-container">
        {images?.length ? (
          <img alt="user" className="user-picture" src={images[0].url} />
        ) : (
          <FaUserCircle className="user-picture-placeholder" />
        )}
      </div>
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
