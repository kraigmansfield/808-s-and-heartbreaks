import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import HomeContent from '../../components/HomeContent';
import "./style.css"
import API from "../../utils/API.js";


export const Profile = (props) => {
    const params = useParams();
    console.log(params);
    const [user, setUser] = useState({})
    useEffect(()=>{
        API.getUserData(params.id).then(data => {
            setUser(data)
        })
    })
  return (
    <div className='Profile'>
        <h1>{user.username} profile!</h1>
        <h2>{user.username}'s' Posts</h2>
       {/* TODO: Add last played genre type by user || title: spotify song/genre, user*/}
        {/* {user.Genres.map(genre=><HomeContent key={genre.id} title={genre.name}/>)}  */}
        {/* Here we want to map over our spotify data for recently played songs? */}

        </div>
  )
}

export default Profile;