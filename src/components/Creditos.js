import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Creditos.css';

const Creditos = () => {
  
  return (
    <div className='contenedor'>
      <nav className='nav'>
        <h1 className='Title'>CRÉDITOS</h1>
      </nav>
      <Link to='/' className='button-link'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </Link>

      <div className='container'>
          <div  className='img'>
          <img src='https://www.cultura.gob.ar/media/uploads/51017288816_92a517b177_k.jpg' alt='card3' className='imagen-rojo' />
          </div>
      </div>
    </div>
  );
};

export default Creditos;
