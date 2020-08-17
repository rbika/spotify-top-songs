import React from 'react';

import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './LoginButton.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const LoginButtonView = (props) => {
  const { onClick, loading } = props;

  return (
    <div className="login-button-component">
      <Button
        variant="success"
        className="d-flex align-items-center"
        onClick={onClick}
        disabled={loading}
      >
        Log in to Spotify
      </Button>
    </div>
  );
};

LoginButtonView.propTypes = propTypes;
export default LoginButtonView;
