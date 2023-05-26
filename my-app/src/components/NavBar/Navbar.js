import React from 'react';

import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-semi-bordeaux">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/Contacto">
              Contacto
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Colecciones">
              Colecciones
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
          <a className="navbar-brand" href="/">
          M N B A
         </a>
         </li>
          <li className="nav-item">
            <a className="nav-link" href="/Artistas">
              Articulos
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Creditos">
              Creditos
              <div className="nav-link-underline"></div>
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
