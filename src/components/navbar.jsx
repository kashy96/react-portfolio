import React from "react";
import { useState,useEffect } from "react";
import {Link} from 'react-scroll';
import logo1 from "../img/male.jpg";

const NavBar = () => {

    const logo = logo1;
    const [navbar, setNavbar] = useState(false);

    //navbar scroll changeBackground function
    const changeBackground = (e) => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

     const handleNavBarToggler = (e) => {
      let mainNav = document.getElementById('mainNav');
      if(!mainNav.classList.contains('navbar-reduce')){
          document.querySelector('#mainNav').classList.add("navbar-reduce");  
      }

      //toggle menus
      if(document.getElementById('navbar-toggler').classList.contains('collapsed')){
        document.getElementById('navbar-toggler').classList.remove('collapsed');
        document.getElementById('navbarDefault').classList.add('show');
      }else{
        document.getElementById('navbar-toggler').classList.add('collapsed');
        document.getElementById('navbarDefault').classList.remove('show');
      }
  }

    useEffect(()=>{
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    },[]);

   
     
    return(
        <nav
        className={"navbar navbar-b navbar-trans navbar-expand-md fixed-top "+ (navbar?"navbar-active ":"") } 
        id="mainNav"
        >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "50px" }}
            />
          </a>
          <button
            className={"navbar-toggler collapsed"}
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavBarToggler}
          >
            <span className={(navbar?"toggle-btn":"")}></span>
            <span className={(navbar?"toggle-btn":"")}></span>
            <span className={(navbar?"toggle-btn":"")}></span>
          </button>

          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          > 
                <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="home" spy={true} smooth={true} offset={50} duration={500} >
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about" spy={true} smooth={true} offset={50} duration={500}>
                  About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="work" spy={true} smooth={true} offset={50} duration={500}>
                    Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    Contact
                  </Link>
                </li>
                </ul>
           
          </div>
        </div>
      </nav>
    );
}

export default NavBar;