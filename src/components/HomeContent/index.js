import React from "react";
import "./style.css";
import API from "../../utils/API";

const HomeContent = (props) => {
    return (
        <div className="HomeContent">
            <h3>{props.genres.id} played by {props.users.username}</h3>
        </div>
    )
}

export default HomeContent;

