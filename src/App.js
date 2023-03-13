import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import React, {useState} from 'react'
import Profile from './pages/Profile';
// import dotenv from 'dotenv';
// import Login from '.Login';
// import {Login} from "../src/Login";
// import {Register} from "../src/Register";


function App() {
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
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/profile/:id" element={<h1><Profile/></h1>} />
        <Route path="*" element={<h1>404 page not found</h1>} />

      </Routes>
    </BrowserRouter>
  )};

export default App;
