import React, { useState, useEffect } from "react";
import { allProjects } from "../../data";
import ProjectCard from "../../components/ProjectCard";
import "./HomePage.css"


function HomePage() {
const [projectList, setProjectList] = useState([]); //This is for loading/when can't retrieve API info?

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)    //Don't include / is already included in API url address
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data)
    });
}, []);  //This is a dependency array - if nothing, run what is in this array when page first loads

    return (
        <div id="project-list">
            <div className="project-card-wrapper">
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    )
};

export default HomePage;



//Talking with Izzy - how to pull from a second place in Django
// function HomePage() {
//     const [projectList, setProjectList] = useState([]); //This is for loading/when can't retrieve API info?
//     const [imagesList, setImagesList] = useState([]);
    
//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}projects`)    //Don't include / is already included in API url address
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setProjectList(data)
//         });
    
//         fetch(`${import.meta.env.VITE_API_URL}images`)    //Don't include / is already included in API url address
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             setImagesList(data)
//         });
//     }, []);  //This is a dependency array - if nothing, run what is in this array when page first loads
    
//         return (
//             <div>
//             <div>
//                 {projectList.map((projectData, key) => {
//                     return <ProjectCard key={key} projectData={projectData} />;
//                 })}
//             </div>
//             <div style={{ border: "2px solid pink" }}>
//                 {imagesList.map((imageData, key) => {
//                     console.log(imageData)
//                     return <img src={imageData.image_url} />
//                 })}
//             </div>
//             </div>
//         )
//     };