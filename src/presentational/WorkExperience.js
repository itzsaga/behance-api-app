import React from 'react';

const WorkExperience = ({ workExperience }) => {
  const workList = workExperience.map(work => (
    <div className="box" key={work.start_date}>
      <div className="content">
        <p className="title is-4">{work.organization}</p>
        <p className="subtitle is-6">{work.position}<br />
          {work.location}
        </p>
      </div>
    </div>));
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Experience</p>
        { workList }
      </div>
    </div>
  );
};

export default WorkExperience;
