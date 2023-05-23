import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));

  //console.log(localStorageToken)
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = localStorageToken.user
  //console.log(localStorageUser)
  const [user, setUser] = useState(localStorageUser);

  //console.log(token,user)

  const login = (user) => {
    setUser(user);
  };
  const navigate = useNavigate()


  

  const signupHandler = async (firstName, lastName, email, password) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      //   console.log(response)
      if (status === 201 || status ===200) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: encodedToken,
            user: createdUser,
          })
        );
        console.log(createdUser)
          console.log(encodedToken);
        setUser(createdUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (email, password) => {
    console.log("loginis clicked")
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        email,
        password,
      });
     console.log(status,foundUser);
    if (status === 201 || status ===200) {
      
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: encodedToken,
            user: foundUser,
          })
        );
        setUser(foundUser);
        setToken(encodedToken);
        console.log(foundUser, encodedToken);
      }
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  console.log()

  const logoutHandler = () => {
    localStorage.removeItem('login');
    setToken(null);
    setUser(null);
  };

  console.log(token)

  return (
    <AuthContext.Provider value={{ token, user, login, logoutHandler, signupHandler,loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
