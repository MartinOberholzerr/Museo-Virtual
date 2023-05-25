import React from 'react';
import logo from './assets/logo.png'
import './navbar.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-semi-bordeaux">
     <div className="container d-flex justify-content-between ">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo de Mi Sitio" className="navbar-logo align-items-center" />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/">
              Inicio
            <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Representantes">
              Representantes
              <div className="nav-link-underline"></div>
              </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Sobre nosotros">
              Sobre nosotros
               <div className="nav-link-underline"></div></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
