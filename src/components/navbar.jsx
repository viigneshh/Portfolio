// NavBar.jsx
import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`nav-bar ${isHome ? 'hide-on-desktop' : 'show-on-desktop'}`}>
      <div className="nav-links">
        <NavLink to="/" className="nav-button home">Home</NavLink>
        <NavLink to="/projects" className="nav-button blue">Projects</NavLink>
        <NavLink to="/about" className="nav-button light-blue">About Me</NavLink>
        <NavLink to="/contact" className="nav-button purple">Contact</NavLink>
      </div>
    </nav>
  );
}
