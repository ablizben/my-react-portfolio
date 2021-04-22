import React from 'react';



const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div className="Header">
                <h1>abby benjamin</h1>
                <div id="icons">
            <a href="https://twitter.com/ablizben"><i class="fab fa-twitter fa-3x"
                    id="twitter"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/ablizben"><i class="fab fa-github fa-3x" 
                    id="github"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/abigail-benjamin-codes/"><i class="fab fa-linkedin fa-3x"
                     id="linkedin"></i></a>
        </div>
            </div>
      
        </div>
    )
    
}

export default Header;