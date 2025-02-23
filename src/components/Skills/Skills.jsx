import React from "react";
import './Skills.css'
import skills_data from "../../assets/skills_data";

function Skills(){
    return (
        <div className="skills">
            <div className="skill-title">
                <h1>Skills</h1>
            </div>
            <div className="skills-sections">
                {skills_data.map((skill, index) => (
                <div key={index} className="skill-box">
                    <span className="skill-icon"><skill.icon /></span>
                    <p>{skill.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;