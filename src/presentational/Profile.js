import React from 'react';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Followers from './Followers';
import Following from './Following';

const Profile = ({ projects, workExperience, followers, following, user }) => (
  <div className="container is-fluid">
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-4">
        <div className="tile is-parent is-vertical">
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
                <a href={user.url} className="button is-link is-rounded">More info on Behance</a>
              </div>
            </div>
          </div>
          <div className="tile is-child">
            <WorkExperience workExperience={workExperience} />
          </div>
          <div className="tile is-child">
            <Followers followers={followers} />
          </div>
          <div className="tile is-child">
            <Following following={following} />
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        <div className="tile is-parent is-vertical">
          <div className="tile is-child">
            <Projects projects={projects} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
