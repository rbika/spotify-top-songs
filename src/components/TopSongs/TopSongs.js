import React from 'react';

import queryString from 'query-string';

import constants from '../../constants';
import { spotifyApi } from '../../api';
import { FaSpotify } from 'react-icons/fa';
import SongCard from '../SongInfo';
import './TopSongs.scss';
import useAsync from '../../hooks/useAsync';

function TopSongs({ timeRange }) {
  const params = queryString.stringify({
    time_range: timeRange,
    limit: constants.SONGS_LIMIT,
  });

  const { status, error, data, run } = useAsync();
  const { SHORT_TERM } = constants;
  let title = timeRange === SHORT_TERM ? 'Last Month' : 'Last 6 Month';

  React.useEffect(() => {
    run(spotifyApi.get(`/me/top/tracks?${params}`));
  }, [run, params]);

  if (status === 'pending' || status === 'idle') {
    return null;
  } else if (status === 'resolved') {
    return (
      <div className="top-songs-component">
        <div className="title">
          <FaSpotify className="mr-1" /> My Top Songs
        </div>
        <div className="sub-title">{title}</div>

        {data.items.map((song, index) => {
          return <SongCard key={song.id} rank={index + 1} song={song} />;
        })}
      </div>
    );
  } else if (status === 'rejected') {
    return <p className="mt-4">{error}</p>;
  }
}

export default TopSongs;
