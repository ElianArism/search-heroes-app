import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, state } = useContext(AuthContext);

  const onLogin = () => {
    login("Elian");

    navigate(localStorage.getItem("last-path") || "/marvel", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button onClick={onLogin} className="btn btn-success">
          Login
        </button>
      </div>
    </>
  );
};
