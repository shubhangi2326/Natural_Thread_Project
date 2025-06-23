import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/NT-logo.png";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleCloseMenu = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Nature Thread Logo" className="logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-between`}
          id="navbarNav"
        >
          {!isNavCollapsed && (
            <div className="d-flex justify-content-end d-lg-none mb-3">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseMenu}
              ></button>
            </div>
          )}

          <div className="navbar-nav mx-auto gap-lg-4">
            <NavLink to="/" className="nav-link" onClick={handleCloseMenu}>
              Home
            </NavLink>
            <NavLink to="/shop" className="nav-link" onClick={handleCloseMenu}>
              Shop
            </NavLink>
            <NavLink to="/blog" className="nav-link" onClick={handleCloseMenu}>
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={handleCloseMenu}
            >
              Contact Us
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleCloseMenu}>
              About Us
            </NavLink>
          </div>

          <div className="navbar-nav">
            <NavLink to="/login" className="nav-link" onClick={handleCloseMenu}>
              Login / Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
