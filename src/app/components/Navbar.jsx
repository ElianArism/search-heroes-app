import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const addNavbarClasses = ({ isActive }) =>
  isActive ? "nav-item nav-link active" : "nav-item nav-link";

export const Navbar = () => {
  const navigate = useNavigate();
  const { state, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();

    navigate("/login", {
      replace: true, // reemplaza el historial de navegacion para evitar que el usuario pueda acceder a la ruta anterior
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={addNavbarClasses} to="/marvel">
            Marvel
          </NavLink>
          <NavLink className={addNavbarClasses} to="/dc">
            DC
          </NavLink>
          <NavLink className={addNavbarClasses} to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            {state?.user?.name}
          </span>

          <button
            onClick={onLogout}
            className="nav-item nav-link btn"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
