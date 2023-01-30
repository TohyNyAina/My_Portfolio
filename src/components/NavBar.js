import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        
          <NavLink exact to="/" className="nav-logo">
            M'lay
            
          </NavLink>
      <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"} id="navbar">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="link"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="link"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="link"
                onClick={handleClick}
              >
                Formation/Diplome
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/competence"
                activeClassName="active"
                className="link"
                onClick={handleClick}
              >
                Competence
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="link"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          
        
        </div>
      </nav>
    </>
  );
}

export default NavBar;
