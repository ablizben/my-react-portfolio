import React from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import Favicon from '../img/favicon-32x32.png';




const NavBar = () => {

return (
    <div className="NavBar">
            <img src={Favicon} id="favicon" alt="website logo"/>
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