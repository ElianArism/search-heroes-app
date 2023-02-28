import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => navigate("/heroes", { replace: true });

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