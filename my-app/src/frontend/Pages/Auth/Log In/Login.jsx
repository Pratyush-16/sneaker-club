
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import UserProfile from "../UserProfile";

export const Login = () => {
  const { loginHandler, token, logoutHandler } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const guestUserDetails = {
    email: "pratyushsingh.1602@gmail.com",
    password: "pratyush"
  };

  const navigate = useNavigate();
  const location = useLocation();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   loginHandler(userDetails.email, userDetails.password);

  // };

  const onClickHandler = () => {
    loginHandler(userDetails.email, userDetails.password);
    console.log("clicked");
  };


  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/");
    }
  }, []);

  console.log(loginHandler)

 if(token) return(
    <UserProfile/>
  ) 

  return (
    <form className="login" onSubmit={e => e.preventDefault()}>
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
        <button className="login-btn" onClick={onClickHandler}>
          Log In
        </button>

        <button
          className="login-btn"
          onClick={()=> loginHandler("pratyushsingh.1602@gmail.com","pratyush")} //api call, api-> mail,pass in body
          
        >
          Log In as Guest
        </button>
        <button className="logout-btn" onClick={() => logoutHandler()}>
          Log Out
        </button>
      </div>

      <div className="login-newperson">
        <p>
          New here?
          <Link className="login-no-account" to="/signup">
            Sign Up Here
          </Link>
        </p>
      </div>
    </form>
  );
};
