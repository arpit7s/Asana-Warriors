import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase/firebaseConfig"; 
import "./Navbar.css";

const Navbar = () => {
    const [user, setUser] = useState(null);

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user); 
            } else {
                setUser(null); 
            }
        });

        
        return () => unsubscribe();
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log("User logged out");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">Asana Warriors</div>
                <div className="links">
                    <NavLink to="/" className="link" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="link" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="link" activeClassName="active">
                        Contact
                    </NavLink>

                    {/* Conditionally render Login/Register or Logout */}
                    {!user ? (
                        <>
                            <NavLink to="/login" className="link" activeClassName="active">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="link" activeClassName="active">
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <button className="link" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>

                <div className="mobile-menu">
                    <button className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
