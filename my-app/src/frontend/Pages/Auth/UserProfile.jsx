import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function UserProfile() {

  const navigate = useNavigate()

    const {user,logoutHandler} = useContext(AuthContext)
    console.log(user , "hello")
 
  return (
    <div>
        <h1>user profile</h1>

        <div className="user-profile-card">
            <h3>Name: {user.firstName}</h3>
            <h3>Email: {user.email}</h3>
         </div>

         <button onClick={()=> logoutHandler()}>Logout</button>

         <button onClick={()=> navigate('/address')}>Manage Address</button>

      
    </div>
  )
}
