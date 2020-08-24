import React, { useEffect, useState } from 'react';

import { spotifyApi } from '../../api';

import ProfileInfoView from './ProfileInfo.view';

function ProfileInfoContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    spotifyApi
      .get('/me')
      .then((resp) => {
        setProfile(resp.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <ProfileInfoView profile={profile} loading={loading} />;
}

export default ProfileInfoContainer;
