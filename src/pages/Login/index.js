import React, {useState} from 'react'
import "./style.css"
import API from "../../utils/API.js";
import App from '../../App';
import { Link } from "react-router-dom"
import ProBuilder from "../../components/ProfileBuilder/profile"
import Profile from "../../components/HomeContent"



export const Login = () => {
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
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
          case "loginEmail":
            setLoginEmail(value)
            break;

          case "loginPassword":
            setLoginPassword(value)
            break;
        
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
   
    const handleLoginSubmit = e => {
      e.preventDefault();
      const userObj = {
        email:loginEmail,
        password:loginPassword
      }
      API.login(userObj).then(data=>{
        console.log(data);
        if(data.token){
        setToken(data.token);
        setIsLoggedIn(true);
        setUserId(data.user.id)
        }
        setLoginEmail("");
        setLoginPassword("");

      })
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
  <div>
    <div className='Login'>
        <h2>Login</h2>
       <form onSubmit={handleLoginSubmit}>
        <input name="loginEmail" value={loginEmail} onChange={handleInputChange} placeholder="email"/>
        <input name="loginPassword" value={loginPassword} onChange={handleInputChange} placeholder="password" type="password"/>
        <Link to ="Profile">
          <button>login</button>
        </Link>
       </form>
    </div>
    <div className= "signUp">
        <h2>Sign Up </h2>
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
  </div>
  )
}

export default Login;