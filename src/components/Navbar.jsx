import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#Home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#Skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
