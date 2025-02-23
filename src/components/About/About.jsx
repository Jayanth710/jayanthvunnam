import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profileimg from '../../assets/profileimg.svg'

function About(){
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-info">
                    <div className="about-para">
                        <p>I am currently a <b>Computer Science</b> graduate student at the <b>University of Colorado at Boulder</b>, with a strong background in software development and AI/ML. 
                            I worked as an <b>Associate Software Developer</b> for 2 years at <b>Advance Auto Parts</b> where I contributed to E-Commerce website and mobile back-end using <b>JavaScript, Nodejs, Express and AWS, Jest</b> framework for testing. 
                            I Interned at <b>GE Appliances</b> as an <b>Digital Technology Intern</b> and worked on enhancing Brilliant Factory Application which is a critical system for Manufacturing Plant at Louisville, Kentucky. Improved the performance by optimizing data latency from backend using JavaScript and middleware. 
                            Created a complete test suite using <b>UI Path</b> RPA tool to automate the testing process of Application.</p>

                            <p>Beyond my work experience, I am passionate about Machine Learning and worked on many projects from undergrad. <b>Lip to speech synthesis</b> to generate speech and text for videos using <b>CNNs and LSTM</b> and <b>Pneumonia Prediction</b> using DL models like <b>VGG-19</b> and <b>ResNet-50</b>. 
                            Daily forecasting the COVID-19 cases using SVMs by integrated dynamic data retrieval from the Johns Hopkins website through API.</p>

                            <p>I am interested in bridging AI/ML models with software applications, ensuring seamless integration into web and mobile platforms for enhanced user experiences.
                            I also enjoy photography 📸<a href="https://unsplash.com/@jarvis_7">(Unsplash)</a>. This portfolio reflects my journey, projects, and aspirations 🌟📩
                            Lets connect and collobarate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;