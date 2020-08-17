import React, { useEffect, useState } from 'react';

import queryString from 'query-string';
import { navigate } from '@reach/router';

import LoginView from './Login.view';
import constants from '../../constants';

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

  return !loading ? <LoginView /> : null;
};

export default LoginContainer;
