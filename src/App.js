import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import React, {useState} from 'react';
import Profile from './pages/Profile';
import Login from '../src/pages/Login/index'
import ProBuilder from './components/ProfileBuilder/profile';


function App() {

  const [Token,setToken] = useState("");
  const [userId,setUserId] = useState(0);
  const [isLoggedIn,setIsLoggedIn] = useState(localStorage.access ? true : false);

  



  const [city,setCity] = useState('');
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      console.log(position)
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&location_type=ROOFTOP&result_type=locality&key=AIzaSyAXimySxn6ljxbxZ3-GSQVEdRXzRNV0fBo`
      
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          // Retrieve the formatted address from the response
          const cityName = data.plus_code.compound_code.split(',')[0].split(' ').splice(1,3).join(' ').trim();
      
          console.log(`The address is in: ${cityName}`);
          console.log(cityName);
      
          setCity(cityName)
        })
        .catch(error => console.log(error));
    })
  })
  return (
      
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} userId={userId}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setIsLoggedIn={isLoggedIn}/>}/>
        <Route path="/profile/:id" element={<Profile setToken={setToken} setUserId={setUserId} setIsLoggedIn={isLoggedIn}/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/ProBuilder" element={<h1><ProBuilder/></h1>}/>
        <Route path="*" element={<h1>404 page not found</h1>} />

      </Routes>
    </BrowserRouter>
  )};

export default App;
