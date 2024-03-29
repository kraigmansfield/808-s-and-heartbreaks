
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons"

const baseUrl = "http://localhost:3001"
// const baseUrl = "https://be-808.herokuapp.com

const API = {
    //gets all genres and they appear in the console (verified)
    getAllGenres: () => {


        return fetch(`${baseUrl}/api/genres`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(res => res.json())
    },

    getUserData: id => {
        // return fetch(`https://be-808.herokuapp.com/api/users/${id}`)
        return fetch(`http://localhost:3001/api/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
    },

    getAllData: () => {
        return fetch(`${baseUrl}/api/users/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
    },

    login: userObj => {

        return fetch(`${baseUrl}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },




    signup: (userObj) => {
        return fetch(`${baseUrl}/api/users/`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    isValidToken: (token) => {
        return fetch(`${baseUrl}/api/users/isValidToken`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`

            }
        }).then(res => res.json())
    },
}
export default API