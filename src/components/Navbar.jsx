import React from 'react';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="floating-navbar">
      <a href="#Home">
        <FaHome />
        <div>Home</div>
      </a>
      <a href="#About">
        <FaUser />
        <div>About</div>
      </a>
      <a href="#Skills">
        <FaTools />
        <div>Skills</div>
      </a>
      <a href="#Projects">
        <FaProjectDiagram />
        <div>Projects</div>
      </a>
      <a href="#Contact">
        <FaEnvelope />
        <div>Contact</div>
      </a>
    </nav>
  );
}

export default Navbar;
