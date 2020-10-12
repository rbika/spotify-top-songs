import React from 'react';

import queryString from 'query-string';

import constants from '../../constants';
import TopSongsView from './TopSongs.view';
import { spotifyApi } from '../../api';

const initialState = {
  status: 'pending',
  data: [],
  error: null,
};

function topSongsReducer(state, action) {
  const { type, payload } = action;

  if (type === 'pending') {
    return { ...state, status: 'pending', error: null, data: [] };
  }

  if (type === 'resolved') {
    return { ...state, status: 'resolved', error: null, data: payload };
  }

  if (type === 'rejected') {
    return { ...state, status: 'rejected', error: payload, data: [] };
  }

  throw Error(`Unhandled action type: ${action.type}`);
}

export function useTopSongs(timeRange) {
  const [state, dispatch] = React.useReducer(topSongsReducer, initialState);

  React.useEffect(() => {
    async function effect() {
      const params = queryString.stringify({
        time_range: timeRange,
        limit: constants.SONGS_LIMIT,
      });
      dispatch({ type: 'pending' });
      try {
        const resp = await spotifyApi.get(`/me/top/tracks?${params}`);
        dispatch({ type: 'resolved', payload: resp.data.items });
      } catch (err) {
        dispatch({ type: 'rejected', payload: err.message });
      }
    }
    effect();
  }, [timeRange]);

  return state;
}

function TopSongsContainer({ timeRange }) {
  const state = useTopSongs(timeRange);
  const { SHORT_TERM } = constants;
  let title = timeRange === SHORT_TERM ? 'Last Month' : 'Last 6 Month';

  return <TopSongsView title={title} {...state} />;
}

export default TopSongsContainer;
