import React from 'react';
import logo from '../../assets/cover/KristenDeLaRosa.gif';
import { Link } from 'react-router-dom';
// import Hamburger from './Hamburger';
import "./styles.scss";
// import Hamburger from 'hamburger-react'

function Nav() {

  return (
    <header className="nav2">
     <nav>
      <ul className="navLink">
       <Link to="/"><img src = {logo} alt="Kristen De La Rosa Logo" height = "100px"/></Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/contact">Contact</Link>
     
        {/* <Hamburger /> */}
     
      </ul>
     
     </nav>
    </header>
  );
}



export default Nav;
