import React, {useState, useEffect} from 'react'
import "./style.css"
import API from "../../utils/API.js";
import Profile from '../Profile';

export const Home = (props) => {
    const [genres, setGenres] = useState([])
    useEffect(()=>{
        API.getAllGenres().then(data => {
            setGenres(data)
        })
    })
  return (
    <div className='Home'>
      {props.isLoggedIn&&<Profile/>}
        <h1>Find your musical match</h1>
       {/* TODO: Add last played genre type by user? || title: spotify song/genre, user*/}
        {/* {genres.map(genre=><HomeContent key={genre.id} name={genres.name}/>)}  */}
        {/* Here we want to map over our spotify data for recently played songs? */}

        </div>
  )
}

export default Home;