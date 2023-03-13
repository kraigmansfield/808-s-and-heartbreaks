import React from "react";
import "./style.css";

const HomeContent = (props) => {
    return (
        <div className="HomeContent">
            <h3>{props.genre} played by {props.user}</h3>
        </div>
    )
}

export default HomeContent;