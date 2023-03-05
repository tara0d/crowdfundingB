import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import "./ProjectPage.css"


function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            console.log(results);
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, []);

    // console.log(projectData);
    console.log(projectData.project_images);

    return (
        <div id="project-container">
            <h2 id="project-title">{projectData.title}</h2>
            <div>
                {projectData.project_images ? 
                    <Carousel id="carousel-div">
                        {projectData.project_images.map((projectImage, key) => {
                            return <img src={projectImage.image_url} key={key} />;
                        })}
                    </Carousel>
                    : <h3>Sorry there are no images in this project</h3>
                }

            </div>
            <div className="project-details-container">
                <div className="project-details-1">
                    <h3>Created by: {projectData.owner}</h3>
                    <button type="submit">Pledge</button>
                </div>
                <div className="project-details-2">
                    <h3>Project status: {projectData.is_open && "OPEN"}{!projectData.is_open && "CLOSED"}</h3>
                    <h3>Open from: {new Date(projectData.date_created).toLocaleDateString()}</h3>
                    <h3>No. players: {projectData.min_players} - {projectData.max_players}</h3>
                    <h3>Age: {projectData.min_age}+</h3>
                    <h3>Play time: {projectData.min_minutes} - {projectData.max_minutes} minutes</h3>
                    <p>{projectData.description}</p>
                    <div id="pledges-container">
                        <h3>Pledges:</h3>
                            <ul>
                                {projectData.pledges.map((pledgeData, key) => {
                            return (
                                <li key={key}>${pledgeData.amount} from {pledgeData.supporter} - {pledgeData.comment}
                                </li>
                                );
                            })}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectPage;



// Removed but interesting code:
// {`Status ${projectData.is_open}`}