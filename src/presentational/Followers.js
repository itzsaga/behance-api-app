import React from 'react';

const Followers = ({ followers }) => {
  const trimmedList = followers.slice(0, 10);
  const followerList = trimmedList.map(user =>
    (user.display_name ? (
      <div className="box" key={user.id}>
        <div className="content">
          {user.display_name ? <h2> {user.display_name} </h2> : null}
          {user.occupation ? <p> {user.occupation} </p> : null}
          {user.company ? <p> {user.company} </p> : null}
          {user.location ? <p> {user.location} </p> : null}
        </div>
      </div>) : null));
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Followers</p>
        { followerList }
      </div>
    </div>
  );
};

export default Followers;
