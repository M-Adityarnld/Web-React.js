import React from "react";
import "./MobileNav.css";

const MobileNav = ({isOpen, toggleMenu}) => {
    return <>
        <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        >

<div className="mobile-menu-container">
<img className="logo" src="./assest/image/logo1" alt="" />

<ul>

         <li>
            <a className="menu-item">Skill</a>
        </li>

        <li>
            <a className="menu-item">My Project</a>
        </li>
        

        <li>
            <a className="menu-item">Contact Me</a>
        </li>

        <li>
       <a className="menu-item">Home</a> 
    </li>

<button className="contact-btn" onClick={() => {}}>
    Hire Me
</button>

</ul>

</div>


        </div>
        </>

}

export default MobileNav;