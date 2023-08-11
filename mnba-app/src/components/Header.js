import React from 'react';
import './headerStyles.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#EBEBEE' }}>
      <div className="container d-flex justify-content-center align-items-center">
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
        <a className="navbar-brand nav-brand d-lg-none" href="/home" style={{ fontSize: '2rem' }}>
          M N B A
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex flex-row">
            <li className="nav-item nav-S">
              <a className="nav-link nav-list" href="#contacto">
                CONTACTO
              </a>
            </li>
            <li className="nav-item nav-separator">
              <a className="nav-link nav-list" href="#colecciones">
                COLECCIONES
              </a>
            </li>
            <a className="navbar-brand nav-brand d-none d-lg-block" href="/home" style={{ fontSize: '2rem' }}>
              M N B A
            </a>
            <li className="nav-item nav-separator">
              <a className="nav-link nav-list" href="#artistas">
                ARTISTAS
              </a>
            </li>
            <li className="nav-item nav-separator">
              <a className="nav-link nav-list" href="#creditos">
                CRÉDITOS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
