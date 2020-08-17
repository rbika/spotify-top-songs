import React from 'react';

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

import './LogoutButton.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const LogoutButtonView = (props) => {
  const { onClick } = props;

  return (
    <div className="logout-button-component">
      <Button className="d-flex align-items-center" onClick={onClick}>
        <FaSignOutAlt className="icon" /> Log out
      </Button>
    </div>
  );
};

LogoutButtonView.propTypes = propTypes;
export default LogoutButtonView;
