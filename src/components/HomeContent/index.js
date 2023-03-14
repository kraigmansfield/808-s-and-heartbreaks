import React from "react";
import "./style.css";
import API from "../../utils/API";

const HomeContent = () => {
    return (
        <div className="HomeContent">
            <h3>{API.genres.id} played by {API.users.username}</h3>
        </div>
    )
}

export default HomeContent;