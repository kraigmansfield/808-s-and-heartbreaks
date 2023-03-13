

const API = {
//gets all genres and they appear in the console (verified)
    getAllGenres : ()=> {
        return fetch(`http://localhost:3000/api/genres`)
        .then(res=>res.json())
    },

    getUserData:id=>{
        return fetch(`http://localhost:3000/api/users/${id}`)
        .then(res=>res.json())
    }
}
export default API