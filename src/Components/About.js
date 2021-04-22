import React from "react";
import Skills from './Skills';
import { skillsBar, section2title } from '../Content';


const About = () => {

    return (

    <div id="about" className="effect2">
    <div data-aos="zoom-in-up" data-aos-once="true" className="row">
    <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not"></div>
    <div className="col-12 offset-md-1 col-md-6 about">
        <div className="About-title-box">
        <h1 id="About" className="red-line">{section2title}</h1>
        </div>
        <p className="lead about-text">
        <p>
                I'm a Baltimore-based frontend developer with a background in psychology
                in both a clinical and research setting, along with human resources and HRIS. 
                When I'm not coding or revamping my portfolio, I love boxing, watching all things
                horror-related, learning new (spoken) languages, and teacing my pup new tricks.
            </p>
       
            <p>
            I'm currently looking for an frontend position either remote or in the Baltimore, MD area. 
            My past experience has given me the ability to establish and manage best practice
            approaches to IT operations and project management as well as possessing an
            excellent communication skill set, focused on problem resolution and team collaboration.
            I'm always happy to discuss my current projects or my own journey, navigating the coding world.
            </p> 
        </p>
    </div>
    </div>
    <div id="Skills"> 
        <div className="row d-flex justify-content-center skills">
            {skillsBar.map((x) => 
                <Skills faClass={x.faClass} label={x.name}/>
            )}
        </div> 
    </div>
</div>
)
}


    export default About;