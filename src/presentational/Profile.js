import React from 'react';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Followers from './Followers';
import Following from './Following';

// eslint-disable-next-line
const Profile = ({ projects, workExperience, followers, following, resetViewing, user }) => (
  <div className="container is-fluid">
    <div className="columns">
      <div className="column is-4">
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
          <WorkExperience workExperience={workExperience} />
          <Following following={following} />
          <Followers followers={followers} />
        </div>
      </div>
      <div className="column">
        <Projects projects={projects} resetViewing={resetViewing} />
      </div>
    </div>
  </div>
);

export default Profile;
