import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Mis Proyectos</h1>
            <div className="projects-container">
                {projectsData.map(project => (
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