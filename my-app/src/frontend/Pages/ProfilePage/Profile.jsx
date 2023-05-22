import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export default function Profile() {

    const{logoutHandler} = useContext(AuthContext)


  return (
    <div>

       
            <h1>This is Profile</h1>
        <button onClick={() => logoutHandler()}>Logout</button>
    </div>
  )
}
