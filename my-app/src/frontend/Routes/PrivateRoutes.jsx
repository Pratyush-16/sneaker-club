import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


export const PrivateRoutes = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();

  return token ? children : <Navigate  to='/login' state={{ from: location }}/>
}