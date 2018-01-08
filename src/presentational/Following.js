import React from 'react';

const Following = ({ following }) => {
  const trimmedList = following.slice(0, 5);
  const followingList = trimmedList.map(user =>
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
        <p className="title">Following</p>
        { followingList }
      </div>
    </div>
  );
};

export default Following;
