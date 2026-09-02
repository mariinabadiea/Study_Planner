import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand fw-bold" to="/">
        Study Planner
      </NavLink>

      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>

        <NavLink className="nav-link" to="/about">
          About
        </NavLink>

        <NavLink className="nav-link" to="/tasks">
          Tasks
        </NavLink>

        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;