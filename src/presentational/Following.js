import React from 'react';

const Following = ({ following }) => {
  const trimmedList = following.slice(0, 10);
  const followingList = trimmedList.map(user =>
    (user.display_name ? (
      <div className="box" key={user.id}>
        <div className="content">
          {user.display_name ? <h2>{user.display_name}</h2> : null}
          {user.occupation ? <p> {user.occupation} </p> : null}
          {user.company ? <p> {user.company} </p> : null}
          {user.location ? <p> {user.location} </p> : null}
        </div>
      </div>) : null));
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
