import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            {/* TODO: When logged in, add link to profile page and logout button */}
            {/* TODO: When logged in, hide login link */}
        </div>
    )
}

export default Navbar;