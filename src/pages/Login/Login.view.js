import React from 'react';

import LoginButton from '../../components/LoginButton';
import './Login.scss';

const LoginView = () => {
  return (
    <div className="login-page">
      <p className="title">My Top Songs</p>
      <p className="sub-title">
        Discover what songs you've been listening to the most on Spotify.
      </p>
      <LoginButton />
    </div>
  );
};

export default LoginView;
