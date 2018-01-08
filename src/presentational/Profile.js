import React from 'react';
import WorkExperience from './WorkExperience';

const Profile = ({ projects, workExperience, followers, following, user }) => (
  <div className="tile is-ancestor">
    <div className="tile is-vertical">
      <div className="tile is-parent">
        <div className="tile is-child">
          <div className="card">
            <div className="card-image">
              <figure className="image is-square">
                <img src={user.images[276]} alt="Profile" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">{user.display_name}</p>
                <p className="subtitle is-6">{user.company}<br />
                  {user.location}<br />
                  <a href={user.website}>{user.website}</a>
                </p>
              </div>
              <div className="content">
                {user.sections.Description}
              </div>
              <a href={user.url}><button className="is-link">More info on Behance</button></a>
            </div>
          </div>
        </div>
        <div className="tile is-child">
          <WorkExperience workExperience={workExperience} />
        </div>
        <div className="tile is-child">
        Projects list
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child">
        Followers
        </div>
        <div className="tile is-child">
        Following
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
