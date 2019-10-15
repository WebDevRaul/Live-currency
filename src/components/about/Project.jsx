import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ isClass, project, title }) => (
  <div className={isClass}>
    <p>{title}</p>
    <ul>
      {project.map(({ text }, index) => <li key={index}>{text}</li>)}
    </ul>
  </div>
);

Project.propTypes = {
  isClass: PropTypes.string.isRequired,
  project: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default Project;