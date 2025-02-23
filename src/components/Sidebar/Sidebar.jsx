import React from "react";
import './Sidebar.css'
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaHome } from "react-icons/fa";
import { LuFileUser } from "react-icons/lu";
import Resume from '../../assets/Jayanth_Vunnam_Resume.pdf'

function Sidebar(){
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };
    return (

        <div className="sidebar">
            <a href="#"><FaHome className="icon" /></a>
            <a href="https://github.com/Jayanth710" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
            </a>
            <a href="https://linkedin.com/in/jayanth-vunnam-863310173/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
            </a>
            <a onClick={() => window.open(Resume, "_blank")}><LuFileUser className="icon" /></a>
            <a href="mailto:jayanthvunnam7@gmail.com">
                <FaEnvelope className="icon" />
            </a>
            <div className="toggle-mode" onClick={toggleDarkMode}>
                {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
            </div>
        </div>
    );
};

export default Sidebar;