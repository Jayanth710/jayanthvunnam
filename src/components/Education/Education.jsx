import React from "react";
import './Education.css'
import { LuUniversity } from "react-icons/lu";
import CU from '../../assets/CU.svg'
import cbit from '../../assets/cbit.jpg'

function Education(){
    return (
        <div className="education">
            <div className="education-title">
                <h1>Education <LuUniversity /></h1>
            </div>
            <div className="education-details">
                <a href="https://www.colorado.edu/" target="_blank" rel="noopener noreferrer" className="education-detail">
                    <img src={CU} alt="" />
                    <div className="education-item">
                        <h2>University of Colorado, Boulder</h2>
                        <p>Master's in Computer Science</p>
                    </div>
                </a>
                <a href="https://www.cbit.ac.in/" target="_blank" rel="noopener noreferrer" className="education-detail">
                    <img src={cbit} alt="" />
                    <div className="education-item">
                        <h2>Chaitanya Bharathi Institute of Technology(CBIT)</h2>
                        <p>Bachelor's in Computer Science and Engineering</p>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Education;