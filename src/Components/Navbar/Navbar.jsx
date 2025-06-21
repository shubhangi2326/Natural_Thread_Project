// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css'; 
// import logo from '../../assets/NT-logo.png'
// import { FaAngleDown } from "react-icons/fa";
 
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <NavLink to="/" className="nav-link">Home</NavLink>
//         <div className="dropdown">
//           <NavLink to="/shop" className="nav-link">Shop</NavLink>
        
//         </div>
//         <NavLink to="/blog" className="nav-link">Blog</NavLink>
//         <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
//         <NavLink to="/about" className="nav-link">About Us</NavLink>
//       </div>

//       <div className="navbar-center">
//           <img src={logo} alt="Logo" className="logo" />
//       </div>

//       <div className="navbar-right">
//         <hr/>
//         <NavLink to="/login" className="nav-link">Login / Register</NavLink>
//         <NavLink to="/cart" className="nav-link">0 / ₹0.00</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Aapki original CSS file waise hi rahegi
import logo from '../../assets/NT-logo.png';
// import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        {/* Logo on the left */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        {/* Mobile view ke liye Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Saare links ab is collapsible div me hain */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Main navigation links (Centered) */}
          {/* KEY CHANGE: 'gap-3' class add ki gayi hai items ke beech me space ke liye. */}
          <div className="navbar-nav mx-auto gap-3">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/shop" className="nav-link">Shop</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
          </div>

          {/* Login/Cart links on the right */}
          <div className="navbar-nav">
            <NavLink to="/login" className="nav-link">Login / Register</NavLink>
            <NavLink to="/cart" className="nav-link">0 / ₹0.00</NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;