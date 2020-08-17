import React from 'react';

import { navigate } from '@reach/router';

import constants from '../../constants';
import LogoutButtonView from './LogoutButton.view';

const LogoutButtonContainer = () => {
  const handleClick = () => {
    localStorage.removeItem(constants.TOKEN_STORAGE_KEY);
    navigate('/login');
  };

  return <LogoutButtonView onClick={handleClick} />;
};

export default LogoutButtonContainer;
