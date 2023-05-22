// import React from "react";

// export const Login = () => {
//   return (
//     <main className="login-content">
//       <div className="login-body">
//         <h4 className="login-header">Sign In</h4>

//         <p className="login-body text--center">
//           Join back and get access to exclusive items
//         </p>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           id="email"
//           value=""
//           className={`input__field } `}
//         />
//       </div>
//     </main>
//   );
// };
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./Login.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";

export const Login = () => {
  const { loginHandler, token , logoutHandler} = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const guestUserDetails = {
    email: "pratyushsingh.1602@gmail.com",
    password: "pratyush"
  }

  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(userDetails.email, userDetails.password);

  
  };

  if(token){
    console.log("USER log IN")
  }else{
    console.log("USER  log out")
  }

  // useEffect(() => {
    
  //   if(token) {
  //     navigate(location?.state?.from.pathname || '/')
  //   }
  // } ,[token])

  return (
    <form className="login" onSubmit={submitHandler}>
      <div className="login-page">
        <div className="main_login">
          <h1>Sneaker Club</h1>
          <p>Welcome! Sign In</p>
        </div>

        <div className="login-after-signin">
          <input
            placeholder="Email"
            className="login-ip"
            type="email"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <input
            placeholder="Password"
            className="login-ip"
            type="password"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <div>
          <button className="login-btn" onClick={loginHandler}>
            Log  In
          </button>

          <button className="login-btn" onClick={()=> setUserDetails(guestUserDetails)}>Log In as Guest</button>
          <button className="logout-btn" onClick={() =>logoutHandler()}>Log Out</button>
        </div>

        <div className="login-newperson">
          <p>
            New here?
            <Link className="login-no-account" to="/signup">
              Sign Up Here
            </Link>
          </p>
        </div>
      </div>

      
    </form>


  );
};
