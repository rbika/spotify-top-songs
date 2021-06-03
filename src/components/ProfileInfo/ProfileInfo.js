import React from 'react';

import { spotifyApi } from '../../api';

import { FaSpinner, FaUserCircle } from 'react-icons/fa';

import LogoutButton from '../LogoutButton';
import './ProfileInfo.scss';
import useAsync from '../../hooks/useAsync';

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

function ProfileInfoContainer() {
  const { status, error, data, run } = useAsync();

  React.useEffect(() => {
    run(spotifyApi.get('/me'));
  }, [run]);

  if (status === 'pending' || status === 'idle') {
    return <FaSpinner className="profile-loader spin" />;
  } else if (status === 'resolved') {
    const { display_name: displayName, images } = data;
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

export default ProfileInfoContainer;
