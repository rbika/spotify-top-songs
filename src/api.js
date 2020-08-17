import axios from 'axios';

import constants from './constants';

const spotifyApi = axios.create({
  baseURL: constants.API_URL,
});

spotifyApi.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem(constants.TOKEN_STORAGE_KEY);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

spotifyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (401 === error.response.status) {
      window.open('/login', '_self');
    } else {
      return Promise.reject(error);
    }
  }
);

export { spotifyApi };
