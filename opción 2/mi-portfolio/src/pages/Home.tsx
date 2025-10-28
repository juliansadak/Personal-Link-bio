import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Mis Proyectos</h1>
            <div className="project-list">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;