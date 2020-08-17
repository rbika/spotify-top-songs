import React, { useEffect, useState } from 'react';

import { spotifyApi } from '../../api';

import ProfileInfoView from './ProfileInfo.view';

function ProfileInfoContainer() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    spotifyApi.get('/me').then((resp) => {
      setProfile(resp.data);
    });
  }, []);

  return <ProfileInfoView profile={profile} />;
}

export default ProfileInfoContainer;
