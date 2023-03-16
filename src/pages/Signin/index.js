import React, {useState} from 'react'
import "./style.css"
import { Link } from "react-router-dom"
import API from '../../utils/API'



export const Signin = () => {
    const [signupEmail,setSignupEmail] = useState("")
    const [signupUsername,setSignupUsername] = useState("")
    const [signupPassword,setSignupPassword] = useState("")
    const [signupAge,setSignupAge] = useState("")
    const [isLoggedIn,setIsLoggedIn] = useState("");
    const [token,setToken] = useState("");
    const [userId,setUserId] = useState("");

    const handleInputChange = e => {
        const {name,value} = e.target;
        switch (name) {
          case "signupEmail":
            setSignupEmail(value)
            break;

          case "signupUsername":
            setSignupUsername(value)
            break;

          case "signupPassword":
            setSignupPassword(value)
            break;

          case "signupAge":
            setSignupAge(value)
            break;
        
          default:
            break;
        }
    }
    const handleSignupSubmit = e => {
        e.preventDefault();
        const userObj = {
          email:signupEmail,
          username:signupUsername,
          password:signupPassword,
          age:signupAge,
        }
        API.signup(userObj).then(data=>{
          console.log(data);
          if(data.token){
          setToken(data.token);
          setIsLoggedIn(true);
          setUserId(data.user.id)
          }
          setSignupEmail("");
          setSignupUsername("");
          setSignupPassword("");
          setSignupAge("");
  
        })
      }

 return (
    <div className='Signin'>

       <form onSubmit={handleSignupSubmit}>
       <input name="signupEmail" value={signupEmail} onChange={handleInputChange} placeholder="email"/>
       <input name="signupUsername" value={signupUsername} onChange={handleInputChange} placeholder="username"/>
       <input name="signupPassword" value={signupPassword} onChange={handleInputChange} placeholder="password" type="password"/>
       <input name="signupAge" value={signupAge} onChange={handleInputChange} placeholder="age"/>
       <Link to ="/ProBuilder">
         <button>Submit</button>
       </Link>
      </form>
      </div>
 )}

export default Signin;