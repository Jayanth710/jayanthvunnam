import React from "react";
import './Projects.css'
import project_data from '../../assets/project_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Projects(){
    return (
        <div id="skills" className="mywork">
            <div className="mywork-title">
                <h1>Projects</h1>
            </div>
            <div className="mywork-container">
                {project_data.map((project, index) =>{
                    return <div key={index} className="project-format">
                        <p><b>{project.project_name}</b></p>
                        <p>{project.project_year}</p>
                        <p>{project.project_desc}</p>

                        <div className="project-container">
                            {project.skill.map((item, index) => (
                            <div key={index} className="skill">{item}</div>
                            ))}
                        </div>

                    </div>
                })}
            </div>
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}

        </div>
    )
}

export default Projects;