import React from 'react';

import PropTypes from 'prop-types';
import { FaSpinner, FaUserCircle } from 'react-icons/fa';

import LogoutButton from '../LogoutButton';
import './ProfileInfo.scss';

const propTypes = {
  data: PropTypes.object,
  status: PropTypes.string,
  error: PropTypes.string,
};

function ProfileImage({ images }) {
  return (
    <div className="user-picture-container">
      {images?.length ? (
        <img alt="user" className="user-picture" src={images[0].url} />
      ) : (
        <FaUserCircle className="user-picture-placeholder" />
      )}
    </div>
  );
}

function ProfileInfoView(props) {
  const { data: profile, status, error } = props;

  if (status === 'pending') {
    return <FaSpinner className="profile-loader spin" />;
  } else if (status === 'resolved') {
    const { display_name: displayName, images } = profile;
    return (
      <div className="profile-info-component">
        <ProfileImage images={images} />
        <div className="username-container">
          <div className="username">{displayName}</div>
          <LogoutButton />
        </div>
      </div>
    );
  } else if (status === 'rejected') {
    return <p>{error}</p>;
  }
}

ProfileInfoView.propTypes = propTypes;
export default ProfileInfoView;
