import React from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';




const NavBar = () => {

return (
    <div className="NavBar">
        Insert Image Here
        <Router>
            <div class="nav-links">
        <NavLink to='/'>Home</NavLink>
          <NavLink to='/aboutme'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
            </div>
        </Router>
    </div>
);
}

export default NavBar;