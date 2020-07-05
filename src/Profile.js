import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState } from './state';

function Profile() {
  const [userName, setUserName] = useRecoilState(usernameState);
  return (
    <div className="Profile">
      <h2>Profile:</h2>
      <p>{userName}</p>
      <input
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
    </div>
  );
}

export default Profile;
