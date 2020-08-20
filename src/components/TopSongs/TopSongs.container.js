import React, { useEffect, useState } from 'react';

import queryString from 'query-string';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import constants from '../../constants';
import TopSongsView from './TopSongs.view';
import { spotifyApi } from '../../api';

const TopSongsContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const { timeRange } = props;
  let elementId, listTitle;

  if (timeRange === constants.SHORT_TERM) {
    listTitle = 'Last Month';
    elementId = 'short-term-list-container';
  } else if (timeRange === constants.MEDIUM_TERM) {
    listTitle = 'Last 6 Month';
    elementId = 'medium-term-list-container';
  }

  const handleDownloadClick = () => {
    const element = document.querySelector(`#${elementId}`);
    html2canvas(element, {
      useCORS: true,
      y: element.offsetTop,
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'my-top-songs.png');
      });
    });
  };

  useEffect(() => {
    setLoading(true);

    const params = queryString.stringify({
      time_range: timeRange,
      limit: constants.SONGS_LIMIT,
    });

    spotifyApi.get(`/me/top/tracks?${params}`).then((resp) => {
      setSongs(resp.data.items);
      setLoading(false);
    });
  }, [timeRange]);

  return (
    <TopSongsView
      listTitle={listTitle}
      elementId={elementId}
      songs={songs}
      loading={loading}
      onDownloadClick={handleDownloadClick}
    />
  );
};

export default TopSongsContainer;
