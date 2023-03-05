import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';


function CreatePledgeForm() {
    const [pledge, setPledge] = useState({
        amount: '',
        comment: '',
        anonymous: '',
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
    
        if (pledge.amount && comment && anonymous) {
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
        
        <form>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="text" id="amount"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" placeholder="Do you have a message for the game developer?"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input type="text" id="goal" placeholder="How much do you need to raise?"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="funding_deadline">Funding deadline:</label>
                <input type="date" id="funding_deadline"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="min_players">Minimum players:</label>
                <input type="text" id="min_players"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="max_players">Maximum players:</label>
                <input type="text" id="max_players"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="max_age">Minimum age:</label>
                <input type="text" id="min_age"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="min_minutes">Minimum minutes of play:</label>
                <input type="text" id="min_minutes"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="max_minutes">Maximum minutes of play:</label>
                <input type="text" id="max_minutes"
                onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="thumbnail_image">Thumbnail image:</label>
                <input type="text" id="thumbnail_image"
                onChange={handleChange}></input>
            </div>

            <button type="submit" onClick={handleSubmit}>Submit</button>

            {
                formError && <p>There was an error submitting your project. Please try again.</p>
            }

        </form>
    )
};

export default CreateProjectForm;