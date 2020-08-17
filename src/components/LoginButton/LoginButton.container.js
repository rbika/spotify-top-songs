import React, { useState } from 'react';

import constants from '../../constants';
import queryString from 'query-string';
import LoginButtonView from './LoginButton.view';

const LoginButtonContainer = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const params = queryString.stringify({
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      response_type: 'token',
      redirect_uri: `${process.env.REACT_APP_BASE_URL}/login`,
      scope: constants.AUTH_SCOPE,
    });
    setLoading(true);
    window.open(`${constants.AUTH_URL}?${params}`, '_self');
  };

  return <LoginButtonView onClick={handleClick} loading={loading} />;
};

export default LoginButtonContainer;
