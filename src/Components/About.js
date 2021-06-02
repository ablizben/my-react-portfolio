import React from "react";
import Skills from './Skills';
import { skillsBar, section2title } from '../Content';




const About = () => {

    return (

    <div id="about" className="effect2">
        <div data-aos="zoom-in-up" data-aos-once="true" className="row" id="about-info">
    {/* <div className="col-12 d-none d-md-block offset-md-1 col-md-4" id="not"></div> */}
    <div className="col-12 offset-md-1 col-md-6 about">
            <div className="About-title-box">
            <h1 id="About" className="red-line">{section2title}</h1>
            </div>
            <p className="lead about-text">
                <p>
                I'm a Baltimore-based frontend developer with a background in psychology and HRIS.
                When I'm not coding or revamping my portfolio, I love boxing, watching all things
                horror-related, learning new (spoken) languages, and teaching my pup new tricks.
                </p>
                <p>   
                Recently, I finished up working with the <a href ='https://the-collab-lab.codes/'>The Collab Lab</a> on    
                a smart shopping list, with a focus on accessibility, that has a tech stack that includes React, Firebase, Material UI, and Netlify.
                Currently, I'm working at <a href="https://www.vultr.com/">Vultr</a> as a Junior Software Engineer. 
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