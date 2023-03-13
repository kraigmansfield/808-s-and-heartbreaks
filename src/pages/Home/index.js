import React from 'react'
import HomeContent from '../../components/HomeContent';
import "./style.css"

export const Home = () => {
  return (
    <div className='Home'>
        <h1>Find your musical match</h1>
       {/* TODO: Add last played genre type by user || title: spotify song/genre, user*/}
        <HomeContent /> 

        </div>
  )
}

export default Home;