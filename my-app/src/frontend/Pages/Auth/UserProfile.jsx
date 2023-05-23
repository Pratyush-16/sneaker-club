import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export default function UserProfile() {

    const {user} = useContext(AuthContext)
    console.log(user , "hello")
 
  return (
    <div>
        <h1>user profile</h1>

        <div className="user-profile-card">
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>

            

        </div>
      
    </div>
  )
}
