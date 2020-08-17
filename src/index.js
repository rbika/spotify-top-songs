import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from '@reach/router';

import Login from './pages/Login';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Login path="/" />
      <Login path="/login" />
      <Profile path="/profile" />
      <Profile path="/*" />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
