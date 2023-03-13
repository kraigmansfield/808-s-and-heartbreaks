

const API = {
//gets all genres and they appear in the console (verified)
    getAllGenres : ()=> {
        return fetch(`https://be-808.herokuapp.com//api/genres`)
        .then(res=>res.json())
    },

    getUserData:id=>{
        return fetch(`https://be-808.herokuapp.com//api/users/${id}`)
        .then(res=>res.json())
    },

    login:userObj=>{
        return fetch(`https://be-808.herokuapp.com//api/users/login`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    },

    signup:userObj=>{
        return fetch(`https://be-808.herokuapp.com//api/users`,{ 
        method: "POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    }
}
export default API