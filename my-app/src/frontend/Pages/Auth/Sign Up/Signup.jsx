import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import "./Signup.css"
import { Link, NavLink ,useLocation, useNavigate} from 'react-router-dom'
import { Login } from '../Log In/Login'
import { AuthContext } from '../../../Context/AuthContext'
import { InvalidTokenError } from 'jwt-decode'



export const  Signup =() => {

  const {signupHandler, token}= useContext(AuthContext)

    const[userData, setUserData] = useState({
        fullName: "",
        lastName: "",
        email:"",
        password:""
    })

    const navigate = useNavigate();
  const location = useLocation();

    const userDataHandler = (event)=>{
        const { name, value } = event.target;
        setUserData({...userData,[name]:value})
    }

    const submitHandler = (event)=> {
      event.preventDefault();
      signupHandler(userData.fullName,userData.lastName, userData.email, userData.password)
    }

    if(token){
      console.log("USER IN")
    }else{
      console.log("USER out")
    }

    // useEffect(() => {
    
    //   if(token) {
    //     navigate(location?.state?.from.pathname || '/')
    //   }
    // } ,[token])
    

  return (
    <form className="signup" onSubmit={submitHandler}>
      {/* <div className="login"> */}
      <div className="loginMain">
        <h1>Sneakers Club</h1>
        <p>Fill in Details</p>
      </div>
      <div className="login-first">
        <input
          placeholder="First Name"
          className="login-ip"
          name="firstName"
          value={userData.firstName}
          onChange={userDataHandler}
        />
        <input
          placeholder="Last Name"
          className="login-ip"
          name="lastName"
          value={userData.lastName}
          onChange={userDataHandler}
        />
        <input
          placeholder="Email"
          className="login-ip"
          onChange={userDataHandler}
          name="email"
          type="email"
          value={userData.email}
        />
        <input
          placeholder="Password"
          className="login-ip"
          onChange={userDataHandler}
          name="password"
          type="password"
          value={userData.password}
        />
      </div>
      <div>
        <button className="login-btn" type="submit">
          Sign Up
        </button>
      </div>
      <div>
        
       <Link to="/login"> <button className="login-btn">Log In</button></Link>
      </div>
    
    </form>
  );
}