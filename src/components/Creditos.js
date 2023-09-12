import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Creditos.css';

const Creditos = () => {
  
  return (
    <div className='contenedor'>
      <h1 className='Title'>CRÉDITOS</h1>
      <Link to='/' className='button-link'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </Link>
      <div className='container'>
          <div  className='img'>
          <img src='https://www.cultura.gob.ar/media/uploads/51017288816_92a517b177_k.jpg' alt="foto1" className='imagen-rojo' />
          </div>
      </div>
      <div className='container'>
          <div  className='img'>
          <img src='https://www.cultura.gob.ar/media/uploads/34195397795_8aa2428cfa_c.jpg' alt="foto2" className='imagen-escultura' />
          </div>
      </div>
    </div>
  );
};

export default Creditos;
