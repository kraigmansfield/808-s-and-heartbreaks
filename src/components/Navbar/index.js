import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"



const Navbar = (props) => {
    return (
        <div className="Navbar">
            <Link to={`/profile/${props.userId}`}>Home</Link>
          <h1>808's & Heartbreaks</h1>
            <Link to="/">Home</Link>

            {props.isLoggedIn?<Link to={`/profile/${props.userId}`}>My Profile</Link>:<Link to="/login">Login</Link>}
            {props.isLoggedIn?<Link to={`/profile/${props.userId}`}>My Profile</Link>:<Link to="/">Logout</Link>}
            {/* TODO: When logged in, add link to profile page and logout button */}
            {/* TODO: When logged in, hide login link */}
        </div>
    )
}

export default Navbar;