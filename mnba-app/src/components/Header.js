import React from 'react';
import './headerStyles.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const linkStyle = { color: '#4e3c30' }; 
 // Verifica si la ubicación actual es /contacto
 const location = useLocation();

  const shouldShowHeader = !['/Contacto', '/Colecciones', '/Artistas', '/Creditos', '/login'].includes(location.pathname);

  if (!shouldShowHeader) {
    return null;
  }
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
        <a className="navbar-brand nav-brand d-lg-none" href="/home" style={{ fontSize: '2rem', ...linkStyle }}>
          M N B A
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex flex-row">
            <li className="nav-item nav-S">
            <Link to="/Contacto" className="nav-link nav-list" style={linkStyle}>
                CONTACTO
              </Link>
            </li>
            <li className="nav-item nav-separator">
              <Link to="/Colecciones" className="nav-link nav-list"  style={linkStyle}>
                COLECCIONES
              </Link>
            </li>
            <a className="navbar-brand nav-brand d-none d-lg-block" href="/" style={{ fontSize: '2rem', ...linkStyle }}>
              M N B A
            </a>
            <li className="nav-item nav-separator">
            <Link to="/Artistas" className="nav-link nav-list" style={linkStyle}>
                ARTISTAS
            </Link>
            </li>
            <li className="nav-item nav-separator">
            <Link to="/Creditos" className="nav-link nav-list" style={linkStyle}>
                CRÉDITOS
            </Link>
            </li>
            <li className="nav-item nav-separator">
              <Link to="/login" className="nav-link nav-list" style={{...linkStyle, borderRadius: '10px', border: '1px solid gray'}}>
                CERRAR SESIÓN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
