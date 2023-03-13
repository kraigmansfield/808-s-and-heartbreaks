import React from 'react';

export default function ProBuilder() {
    return(
        <div classname="container">
        <h2>Please select genres you like!</h2>
            <div className="liked-container">
                <option value ="Pop"></option>
                <option value ="Hip-Hop"></option>
                <option value ="Rock"></option>
                <option value ="Country"></option>
                <option value ="R&B"></option>
                <option value ="Funk"></option>
            </div>
        <h2>Please select genres you dislike!</h2>
        <div className="disliked-container">
        <option value ="Pop"></option>
                <option value ="Hip-Hop"></option>
                <option value ="Rock"></option>
                <option value ="Country"></option>
                <option value ="R&B"></option>
                <option value ="Funk"></option>
            </div>

        </div>
    )
}


