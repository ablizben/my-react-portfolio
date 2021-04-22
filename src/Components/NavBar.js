import React from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';




const NavBar = () => {

return (
    <div className="NavBar">
        <h1>Abby Benjamin</h1>
        <Router>
        <NavLink to='/'>Home</NavLink>
          <NavLink to='/aboutme'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          </Router>
    </div>
);
}

export default NavBar;