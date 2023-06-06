import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));

  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = localStorageToken?.user;
  
  const [user, setUser] = useState(localStorageUser);
  console.log(localStorageToken?.token,"this is token")
  console.log(token,"token)")

  const login = (user) => {
    setUser(user);
  };
  const navigate = useNavigate();

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

      if (status === 201 || status === 200) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: encodedToken,
            user: createdUser,
          })
        );
        toast.success("LogIn In Successfull");
        setUser(createdUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (email, password) => {
    
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(status, foundUser);
      if (status === 201 || status === 200) {
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("login");
    setToken(false);
    setUser(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logoutHandler, signupHandler, loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
