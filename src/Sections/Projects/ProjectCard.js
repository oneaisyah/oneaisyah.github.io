import React from "react";
import TechStack from "../TechStack";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            {project.current && <div className="project-tag">Current Project</div>}
            <img src={project.image} alt={project.title} className="project-image"/>
            <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-stack-container">
                    {project.techstack.map((tech, index) => (
                        <TechStack key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;