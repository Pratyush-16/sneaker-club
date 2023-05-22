import React, { useState } from 'react'
import axios from 'axios'
import "./Signup.css"

export const  Signup =() => {

    const[userData, setUserData] = useState({
        fullName: "",
        email:"",
        password:""
    })

    const userDataHandler = (event)=>{
        const { name, value } = event.target;
        setUserData({...userData,[name]:value})
    }

    const signupHandler = async(event)=>{
        event.preventDefault();
        console.log(userData);
        try{
          const response = await axios.post('/api/auth/signup',userData);
          console.log(response)
        }
         catch (error) {
          console.log(error);
        }
      };

  return (
    <form className="login" onSubmit={signupHandler}>
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
        <button className="login-btn">Log In</button>
      </div>
    
    </form>
  );
}