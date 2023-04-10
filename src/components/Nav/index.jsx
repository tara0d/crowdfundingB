import React from "react";
import { Link } from 'react-router-dom';
import logo from './check_6.png'
import "./Nav.css"

function Nav() {
    return (
        <nav id="navigation">
            <Link to="/">
            <div id="nav-logo">
                <img src={logo} alt="check mate logo"></img>
            </div>
            </Link>
            <div id="nav-links">
                <div className="nav-links-text">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-links-text">
                    <Link to="/create-project/">Create project</Link>
                </div>
                <div className="nav-links-text">
                    {/* <Link to="/project">Project</Link> */}
                </div>
                <div className="nav-links-text">
                    <Link to="/login/">Log in</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;