// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/selected-projects.css';

const coverProjects = require.context('../assets/project_covers', true)

const SelectedProjects = ({ projects }) => {
  return (
    <section className="selected-projects">
      <div className='container-projects'></div>
      <h3 className='projects-title'>Here are some selected projects that showcase skils and knowledge applied in solutions to problems</h3>
      
      <div className="selected-projects-list">
        {projects.map(project => (
          <div key={project.id} className="selected-project-item">
            <Link to={`/project_${project.id}`}>
              <img 
                // src={project.image}
                src={ coverProjects(`./${project.alt_text}.jpg`) }
                alt={project.alt_text} />
              
              <div className='project-side-container'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <h5>Branding · UX/UI Design</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link to={"/work"} className='btn-view-allpro'>
        <p>View All</p>
        <p>Projects</p>
      </Link>
    </section>
  );
};

export default SelectedProjects;
