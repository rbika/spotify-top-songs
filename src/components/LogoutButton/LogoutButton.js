import React from 'react';

import { navigate } from '@reach/router';

import constants from '../../constants';
import { Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

import './LogoutButton.scss';

const LogoutButtonContainer = () => {
  const handleClick = () => {
    localStorage.removeItem(constants.TOKEN_STORAGE_KEY);
    navigate('/login');
  };

  return (
    <div className="logout-button-component">
      <Button className="d-flex align-items-center" onClick={handleClick}>
        <FaSignOutAlt className="icon" /> Log out
      </Button>
    </div>
  );
};

export default LogoutButtonContainer;
