import React from 'react';




export default function Profile() {
    return(
        <div classname="container">
        <h1>Please select genres you like!</h1>
            <div classname="liked-container">
                <option value ="Pop"></option>
                <option value ="Hip-Hop"></option>
                <option value ="Rock"></option>
                <option value ="Country"></option>
                <option value ="R&B"></option>
                <option value ="Funk"></option>
            </div>
        <h1>Please select genres you dislike!</h1>
        <div classname="disliked-container">
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


