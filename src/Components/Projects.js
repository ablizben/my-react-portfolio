import React from 'react'
import ProjectInfo from '../ProjectInfo';
import { projects, section3Title } from '../Content';

const Projects = () => {
    return (
        <div id="projects">
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <ProjectInfo id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        {/* <h1 id="Projects" className="red-line pp-head">{section4Title}</h1> */}
                    </div>
                </>
                <div className="row">
                    {/* {miscellaneous && miscellaneous.map((x) => 
                    <ProjectInfo id={x.id} url={x.url} name={x.name} />
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default Projects;