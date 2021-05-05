import React from "react";
// import Favicon from '../img/favicon-32x32.png';


const NavBar = () => {

return (
    <div className="NavBar">
            {/* <img src={Favicon} id="favicon" alt="website logo"/> */}
            <div id="favicon">FAVICON</div>
  
        <div className="nav-links">
            <a href=".NavBar">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        

        
    </div>
);
}

export default NavBar;