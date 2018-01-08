import React from 'react';

const Followers = ({ followers }) => {
  const trimmedList = followers.slice(0, 9);
  const followerList = trimmedList.map(user =>
    (<div className="content" key={user.id}>
      <p className="title is-4">{user.display_name}</p>
      <p className="subtitle is-6">{user.occupation}<br />
        {user.company}<br />
        {user.location}
      </p>
    </div>));
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Followers:</p>
        { followerList }
      </div>
    </div>
  );
};

export default Followers;
