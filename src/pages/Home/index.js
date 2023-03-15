import React, {useState, useEffect} from 'react'
import "./style.css"
import API from "../../utils/API.js";
import Profile from '../Profile';


const Home = (props) => {
    const [genres,setGenres] = useState([])
    const [users,setUsers] = useState([])
    
    useEffect(()=>{
        API.getAllGenres().then(data => {
            setGenres(data)
        })
    })
    
    useEffect(() => {
      API.getAllData().then(data => {
          setUsers(data)
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

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getAllData().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Liked Genres</th>
            <th>Disliked Genres</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.likedGenres}</td>
              <td>{user.dislikedGenres}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}










export default Home;