import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "transparent",
        fontFamily: "system-ui",
        padding: "20px 30px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#ff6b6b",
            padding: "10px 20px",
            borderRadius: "50px",
            color: "white",
            fontWeight: "600",
            fontFamily: "system-ui",
            fontSize: "16px",
            transition: "transform 0.2s ease",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={{
            textDecoration: "none",
            backgroundColor: "#6b9bff",
            padding: "10px 20px",
            borderRadius: "50px",
            color: "white",
            fontWeight: "600",
            fontFamily: "system-ui",
            fontSize: "16px",
            transition: "transform 0.2s ease",
          }}
        >
          About Me
        </NavLink>

        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#7ed957",
            padding: "10px 20px",
            borderRadius: "50px",
            color: "white",
            fontWeight: "600",
            fontFamily: "system-ui",
            fontSize: "16px",
            transition: "transform 0.2s ease",
          }}
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
}
