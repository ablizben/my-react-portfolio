import React from 'react';
// import { social } from '../Content';



const Header = () => {

    // const scrollTo = () => {
    //     window.scrollTo({
    //         top: 100000,
    //         left: 0,
    //         behavior: "smooth"
    //     })
    // }

    return (
        <div>
            <div className="Header">
                <h1>abby benjamin</h1>
                <h2>frontend developer</h2>
                {/* <div className="header-icons">
                     <div className="social-icons">
                            {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin fa-3x" id="linkedin"></i></a>}
                            {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github fa-3x" id="github"></i></a>}<br/>
                    </div>
                    <div className="resume-icon">
                            {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download fa-3x" id="resume"></i></a>}
                    </div>
                </div> */}
                <span></span>
            </div>
        </div>
       
    )
    
}

export default Header;