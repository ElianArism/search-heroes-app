import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const AuthRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);
  return state?.logged ? <Navigate to="/marvel" /> : children;
};
