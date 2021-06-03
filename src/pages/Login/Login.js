import React, { useEffect, useState } from 'react';

import queryString from 'query-string';
import { navigate } from '@reach/router';

import LoginButton from '../../components/LoginButton';
import constants from '../../constants';

import './Login.scss';

const LoginContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const { access_token: accessToken } = queryString.parse(props.location.hash);

  useEffect(() => {
    if (accessToken) {
      setLoading(true);
      localStorage.setItem(constants.TOKEN_STORAGE_KEY, accessToken);
      navigate('/profile');
    } else {
      setLoading(false);
    }
  }, [accessToken, loading]);

  return !loading ? (
    <div className="login-page">
      <p className="title">My Top Songs</p>
      <p className="sub-title">
        Discover what songs you've been listening to the most on Spotify.
      </p>
      <LoginButton />
    </div>
  ) : null;
};

export default LoginContainer;
