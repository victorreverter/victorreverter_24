// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/selected-projects.css';

const coverProjects = require.context('../assets/project_covers', true)

const SelectedProjects = ({ projects }) => {
  return (
    <section className="selected-projects">
      <h2 className='title'>Selected Projects</h2>
      <h4 className='subtitle'>See a selection of projects that show my skills and knowledge through real-world challenges. These examples showcase my practical approach to problem-solving and my dedication to creating meaningful solutions through design.</h4>
      
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
                <h5>{project.categories}</h5>
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
