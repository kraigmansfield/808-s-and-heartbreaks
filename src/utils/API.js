

const API = {
//gets all genres and they appear in the console (verified)
    getAllGenres : ()=> {
        return fetch(`http://localhost:3000/api/genres`)
        .then(res=>res.json())
    },

    getUserData:id=>{
        return fetch(`http://localhost:3000/api/users/${id}`)
        .then(res=>res.json())
    },

    login:userObj=>{
        return fetch(`http://localhost:3000/api/users/login`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    },

    signup:userObj=>{
        return fetch(`http://localhost:3000/api/users`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    }, 

    // spotifylogin:

    // playlist:placeholder => {
    //     return fetch("http://localhost:3000/api/spotify/profile")
    // }
}
export default API