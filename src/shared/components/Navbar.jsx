import { Link, NavLink } from "react-router-dom";

const addNavbarClasses = ({ isActive }) =>
  isActive ? "nav-item nav-link active" : "nav-item nav-link";

export const Navbar = () => {
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
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            Elian
          </span>

          <button className="nav-item nav-link btn">Logout</button>

          <NavLink className={addNavbarClasses} to="/login">
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
