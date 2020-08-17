import React from 'react';

import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';

// import LogoutButton from '../LogoutButton';
import './ProfileInfo.scss';

const propTypes = {
  profile: PropTypes.object.isRequired,
};

const ProfileInfoView = (props) => {
  const { display_name: displayName, images } = props.profile;

  return displayName && images.length ? (
    <div className="profile-info-component">
      <img alt="user" className="user-picture" src={images[0].url} />
      <div>
        <div className="username">{displayName}</div>
        <div className="title">My top songs</div>
        {/* <LogoutButton /> */}
      </div>
    </div>
  ) : (
    <FaUserCircle className="user-picture-placeholder" />
  );
};

ProfileInfoView.propTypes = propTypes;
export default ProfileInfoView;
