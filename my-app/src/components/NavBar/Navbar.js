import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-semi-bordeaux">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/Contacto">
              CONTACTO
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Colecciones">
              COLECCIONES
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
              ARTICULOS
              <div className="nav-link-underline"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Creditos">
              CREDITOS
              <div className="nav-link-underline"></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
