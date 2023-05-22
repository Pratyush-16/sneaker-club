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
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {

  const navigate = useNavigate();

  const loginHandler =()=> {
    navigate("/");

  }
  return (
    
    
    <div className="login-page">
      <div className="main_login">
        <h1>Sneaker Club</h1>
        <p>Welcome! Sign In</p>
      </div>

      <div className="login-after-signin">
        <input placeholder="Email" className="login-ip"/>
        <input placeholder="Password" className="login-ip"/>
      </div>
      <div >
        <button className="login-btn" onClick={loginHandler}>SIGN IN</button>
      </div>
      <div className="login-newperson">
        <p>New here? 
          <Link className="login-no-account" to="/signup">
            Sign Up Here
            </Link></p>
      </div>
    </div>
  );
};
