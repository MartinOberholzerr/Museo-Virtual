import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Conection.css'; 

const Contact = () => {
  return (
    <div className='contenedor'>
    <nav className='nav'>
        <h1 className='Title'>COLECCIONES</h1>
    </nav>
    <Link to="/" className="button-link">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
    </Link>
    
    </div>
  );
};

export default Contact;
