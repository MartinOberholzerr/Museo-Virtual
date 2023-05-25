import React from 'react';

import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-semi-bordeaux">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Inicio
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Representantes">
              Representantes
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
          <a className="navbar-brand" href="/">
          M N B A
         </a>
         </li>
          <li className="nav-item">
            <a className="nav-link" href="/Sobre nosotros">
              Sobre nosotros
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Sobre nosotros">
              Sobre nosotros
              <div className="nav-link-underline"></div>
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
