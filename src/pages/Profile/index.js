import React, {useState, useEffect,} from 'react'
import {useParams} from 'react-router-dom'
import HomeContent from '../../components/HomeContent';
import "./style.css"
import API from "../../utils/API.js";
import queryString from 'query-string';


export const Profile = ({userId}) => {
    const [user, setUser] = useState({})
    const [tracks, setTracks] = useState([])
    useEffect(()=>{
      if (userId !=0) {

        API.getUserData(userId).then(data => {
          console.log(data)
          console.log(userId)
          setUser(data)
        })

        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        if (!accessToken)
        return;
        fetch('https://api.spotify.com/v1/me/player/recently-played', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
        // .then(data => useState({
        //   user: {
        //     track: data.track
        //   },
        // }))
        
      }
    }, [userId])
  
      
      
      
         
  
    //   fetch('https://api.spotify.com/v1/me/playlists', {
    //     headers: {'Authorization': 'Bearer ' + accessToken}
    //   }).then(response => response.json())
    //   .then(data => {
      // console.log
      //setTrack(data.user.tracks)
    //}
    // }))
      



    
  return (
    <div className='Profile'>
      {user.username ? (
        <div>
        <h1>{user.username} profile!</h1>
        <h2>{user.username}'s' Genres!</h2>
       {/* TODO: Add last played genre type by user || title: spotify song/genre, user*/}
        {/* {user?.LikedGenre?.map(genre=><HomeContent key={genre.id} title={user.name}/>)}  */}
        {/* Here we want to map over our spotify data for recently played songs? */}
        </div>
      ) : <h2> Loading...</h2>}

        </div>
  )
}

export default Profile;