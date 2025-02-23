import React, { useRef, useState } from "react";
import './Navbar.css'
import underline from '../assets/nav_underline.svg'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar(){

    const [menu, setMenu] = useState("home")
    const menuRef = useRef()

    const openMenu = () =>{
        menuRef.current.style.right = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    return (
        <div className="navbar">
            <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
                <li className={`nav-item ${menu === "home" ? "active" : ""}`} onClick={() => setMenu("home")}><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
                <li className={`nav-item ${menu === "about" ? "active" : ""}`} onClick={() => setMenu("about")}><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
                <li className={`nav-item ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}><AnchorLink className='anchor-link' offset={50} href='#skills'><p>Skills</p></AnchorLink>{menu==="skills"?<img src={underline} alt=""/>:<></>}</li>
                <li className={`nav-item ${menu === "projects" ? "active" : ""}`} onClick={() => setMenu("projects")}><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt=""/>:<></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>

        </div>
    )
}

export default Navbar;