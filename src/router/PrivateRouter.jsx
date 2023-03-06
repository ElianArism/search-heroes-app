import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRouter = ({ children }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;
    localStorage.setItem("last-path", lastPath);
  }, [pathname, search]);

  const { state } = useContext(AuthContext);
  return state?.logged ? children : <Navigate to="/login" />;
};
