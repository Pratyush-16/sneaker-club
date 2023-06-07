import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../UserProfile/UserProfile.css"

export default function UserProfile() {
  const navigate = useNavigate();

  const { user, logoutHandler } = useContext(AuthContext);

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>

      <div className="user-profile-card">
        <h3>Name: {user.firstName}</h3>
        <h3>Email: {user.email}</h3>
      </div>

      <button  className="address-button" onClick={() => navigate("/address")}>Manage Address</button>
      <button className="logout-button" onClick={() => logoutHandler()}>Logout</button>

     
    </div>
  );
}
