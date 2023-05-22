import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);

  const login = (user) => {
    setUser(user);
  };

  

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
      if (status === 201) {
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
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      //   console.log(response)
    //   if (status === 201) {
    //     localStorage.setItem(
    //       "login",
    //       {
    //         token: encodedToken,
    //         user: foundUser,
    //       }
    //     );
    if (status === 201) {
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
    } catch (error) {
      console.log(error);
    }
  };

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
