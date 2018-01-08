import React from 'react';

const Projects = ({ projects }) => {
  const trimmedList = projects.slice(0, 10);
  const projectList = trimmedList.map(project =>
    (<div className="media" key={project.id}>
      <div className="media-left">
        <figure className="image is-128x128">
          <img src={project.covers[404]} alt="Project cover" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{project.name}</p>
        <p className="subtitle is-6">Viewed: {project.stats.views} times</p>
        <a href={project.url} className="button is-link is-rounded">More info...</a>
      </div>
    </div>));
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Projects</p>
        { projectList }
      </div>
    </div>
  );
};

export default Projects;
