
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons"

const baseUrl = "http://localhost:3001"
// const baseUrl = "https://be-808.herokuapp.com

const API = {
//gets all genres and they appear in the console (verified)
    getAllGenres : ()=> {

        // return fetch(`https://be-808.herokuapp.com/api/genres`)
        return fetch(`https://localhost:3001/api/genres`)


        return fetch(`${baseUrl}/api/genres`)

        .then(res=>res.json())
    },

    getUserData:id=>{

        // return fetch(`https://be-808.herokuapp.com/api/users/${id}`)
        return fetch(`https://localhost:3001/api/users/${id}`)
        .then(res=>res.json())
    },

    getAllData : () => {
        // return fetch(`https://be-808.herokuapp.com/api/users/`)
        return fetch(`https://localhost:3001/api/users/`)


        return fetch(`${baseUrl}/api/users/${id}`)
        .then(res=>res.json())
    },

    login:userObj=>{
        // return fetch(`https://be-808.herokuapp.com/api/users/login`,{ 
        return fetch(`https://localhost:3001/api/users/login`,{ 

        return fetch(`${baseUrl}/api/users/login`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    },

    signup:userObj=>{
        // return fetch(`https://be-808.herokuapp.com/api/users`,{ 
        return fetch(`https://localhost:3001/api/users`,{ 


        return fetch(`${baseUrl}/api/users`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    }, 
    
   isValidToken:(token) => {
    return fetch(`${baseUrl}/api/users/isValidToken`,{ 
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${token}`
        
        }
    }).then(res=>res.json())
   }


}
export default API