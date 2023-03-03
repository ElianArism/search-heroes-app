import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    logged: false,
  });

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};
