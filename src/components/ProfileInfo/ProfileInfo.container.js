import React from 'react';

import { spotifyApi } from '../../api';

import ProfileInfoView from './ProfileInfo.view';

const initialState = {
  status: 'pending',
  data: null,
  error: null,
};

function profileInfoReducer(state, action) {
  const { type, payload } = action;

  if (type === 'pending') {
    return { ...state, status: 'pending', error: null, data: null };
  }

  if (type === 'resolved') {
    return { ...state, status: 'resolved', error: null, data: payload };
  }

  if (type === 'rejected') {
    return { ...state, status: 'rejected', error: payload, data: null };
  }

  throw Error(`Unhandled action type: ${action.type}`);
}

function useProfileInfo() {
  const [state, dispatch] = React.useReducer(profileInfoReducer, initialState);

  React.useEffect(() => {
    async function effect() {
      dispatch({ type: 'pending' });
      try {
        const resp = await spotifyApi.get('/me');
        dispatch({ type: 'resolved', payload: resp.data });
      } catch (error) {
        dispatch({ type: 'rejected', payload: error.message });
      }
    }
    effect();
  }, []);

  return state;
}

function ProfileInfoContainer() {
  const state = useProfileInfo();
  return <ProfileInfoView {...state} />;
}

export default ProfileInfoContainer;
