import React from "react";
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;

    const truncate = (input) =>
        input?.length > 200 ? `${input.substring(0, 194)}...` : input;

    return (
        <div className="project-card">
            <div className="project-card-details">  {/*TO8*/}
                <Link to={`/project/${projectData.id}`}>
                    <div>
                        <img src={projectData.thumbnail_image} />
                    </div>
                    <div className="project-card-text">
                        <h3 className="card-heading-author">{projectData.title}</h3>
                        <p id="card-description">{truncate(projectData.description)}</p>
                        <p className="card-heading-author">Created by: {projectData.owner}</p>
                    </div>
                </Link>
            </div>
        </div>

    )
};

export default ProjectCard;