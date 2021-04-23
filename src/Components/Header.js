import React from 'react';
import { social } from '../Content';


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
                <div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="inline-block">
                            {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                            {social.instagram && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                            {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                        </div>
                            {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                    </div>

                </div>
            </div>
        </div>
       
    )
    
}

export default Header;