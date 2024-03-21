import React, { useState }  from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu (!openMenu);
    };

    return(
<>
        < MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


       <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src="./assest/image/logo1.png" alt=""></img>
        <h1 className="judul">M-Adityarnld</h1>

        <ul>

        <li>
            <a className="menu-item">Home</a>
        </li>

        <li>
            <a className="menu-item">My Project</a>
        </li>
        

        <li>
            <a className="menu-item">Contact Me</a>
        </li>

        <li>
            <a className="menu-item">Skill</a>
        </li>

        <button className="contact-btn" onClick= { () => {} }>
            Hire Me 
            </button>
        </ul>

        <button className="menu-btn" onClick={toggleMenu}>
            <span
                class={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
                >
                 {openMenu ? "close" : "menu"}

                </span>
        </button>

      </div>
       </nav>

       </>
    );
};

export default Navbar;
