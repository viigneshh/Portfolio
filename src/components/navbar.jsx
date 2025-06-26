// NavBar.jsx
import { NavLink } from "react-router-dom";
import "../css/navbar.css"; // External CSS

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <NavLink to="/" className="nav-button blue">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-button light-blue">
          About Me
        </NavLink>

        <NavLink to="/" className="nav-button purple">
          Home
        </NavLink>
      </div>
    </nav>
  );
}
