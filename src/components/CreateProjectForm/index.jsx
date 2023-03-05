import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import "./CreateProjectForm.css";


// import { useNavigate } from 'react-router-dom';


function CreateProjectForm() {
    const [project, setProject] = useState({
        title: '',
        description: '',
        goal: '',
        funding_deadline:'',
        min_players: '',
        max_players:'',
        min_age:'',
        min_minutes:'',
        max_minutes:'',
        thumbnail_image:'',
    });

//Todo:
    //Google React date time for the 'date created- field - import library
    //Create all the fields

    const [formError, setFormError] = useState(false)

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (project.title && description && goal && funding_deadline && min_players && max_players &&
            min_age && min_minutes && max_minutes && thumbnail_image) {
            postData().then((response) => {
                !formError && navigate(`/project/${response.id}`);
            })
        }
    };
    
    const postData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(project)
        })
        if (response.ok) {
            setFormError(false);
            return response.json()
        } else {
            setFormError(true);
            return
        }
        // return response.json();
    }

    return(
        
        <form id="create-project-form">
            <h1>Let's create a game!</h1>
            <div className="project-form-section">
                <label htmlFor="title">Name of your game:</label>
                <input type="text" id="title"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="description">What is your game about?:</label>
                <input type="text" id="description"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="goal">Funding goal:</label>
                <input type="text" id="goal"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="funding_deadline">Funding deadline:</label>
                <input type="date" id="funding_deadline"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="min_players">Minimum players:</label>
                <input type="text" id="min_players"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="max_players">Maximum players:</label>
                <input type="text" id="max_players"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="max_age">Minimum age:</label>
                <input type="text" id="min_age"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="min_minutes">Minimum minutes of play:</label>
                <input type="text" id="min_minutes"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="max_minutes">Maximum minutes of play:</label>
                <input type="text" id="max_minutes"
                onChange={handleChange}></input>
            </div>
            <div className="project-form-section">
                <label htmlFor="thumbnail_image">Thumbnail image:</label>
                <input type="text" id="thumbnail_image" placeholder="365px by 300px"
                onChange={handleChange}></input>
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>

            {
                formError && <p id="project-form-error">There was an error submitting your project. Please try again.</p>
            }

        </form>
    )
};

export default CreateProjectForm;




    // const [gameDetails, setGameDetails] = useState({
    //     title: '',
    //     description: '',
    // });



//handleChange on LoginForm.jsx

// const navigate = useNavigate();

// const handleSubmit = (event) => {
//     event.preventDefault();

//     if (credentials.username && credentials.password) {
//         postData().then((response) => {
//             window.localStorage.setItem("token", response.token);
//             navigate("/");
//     });
//     }
// };

// const postData = async () => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`, {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials)
//     })
//     return response.json();
// }



