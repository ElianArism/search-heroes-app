import { useReducer } from "react";
import { ACTIONS } from "../actions/actions";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const _init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    user,
    logged: !!user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {}, _init);

  const login = (name = "") => {
    const user = {
      name,
      id: Date.now(),
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: ACTIONS.login,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: ACTIONS.logout });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
