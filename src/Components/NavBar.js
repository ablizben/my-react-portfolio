import React from "react";
import Favicon from '../img/favicon-32x32.png';


const NavBar = () => {

return (
    <div className="NavBar">
            <img src={Favicon} id="favicon" alt="website logo"/>
        <div className="nav-links">
            <a href=".header">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        

        
    </div>
);
}

export default NavBar;