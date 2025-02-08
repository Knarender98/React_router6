import { NavLink } from "react-router-dom";
import "./Header.css"; // Import the separate CSS file

export const Header = () => {
  return (
    <header className="header">
      {/* Logo on the Left */}
      <div className="logo">NK</div>

      {/* Navigation Links on the Right */}
      <nav className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/movie" className="nav-item" style={({isActive})=>{
            return{
                color : isActive ? "red" : "white"
            }
        }}>
          Movie
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
