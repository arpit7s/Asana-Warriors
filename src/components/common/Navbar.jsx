import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase/firebaseConfig";
import { Sun, Moon, X, Menu } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    auth.signOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Asana Warriors</div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Navigation Links */}
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/add-yoga" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>Add Yoga</NavLink>

          {!user ? (
            <>
              <NavLink to="/login" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>Login</NavLink>
              <NavLink to="/register" className={({ isActive }) => isActive ? "link active" : "link"} onClick={() => setIsMenuOpen(false)}>Register</NavLink>
            </>
          ) : (
            <button className="link" onClick={() => { handleLogout(); setIsMenuOpen(false); }}>Logout</button>
          )}

          <div className="theme-toggle">
            {isDark ? (
              <Sun className="theme-icon" onClick={toggleTheme} />
            ) : (
              <Moon className="theme-icon" onClick={toggleTheme} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;