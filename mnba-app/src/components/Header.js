import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-center align-items-center">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            <li className="nav-item"><a className="nav-link" href="#colecciones">Colecciones</a></li>
            <a className="navbar-brand" href="#">MNBA</a>
            <li className="nav-item"><a className="nav-link" href="#artistas">Artistas</a></li>
            <li className="nav-item"><a className="nav-link" href="#creditos">Créditos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
