import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Importa el archivo de estilos

const Contact = () => {
  return (
    <div className="containers">
      <Link to="/" className="button-link">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
      </Link>
      <div className="left-side">
        <div className="overlay-box">
          <p className="overlay-text">CONTACTANOS <br></br>SOMOS MNBA</p>
          <p className="overlay-subtext">Gracias por visitar nuestra experiencia virtual</p>
        </div>
        
        <img src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/303162785_5110255232431235_6571723615263869434_n.jpg?stp=cp0_dst-jpg_e15_p240x240_q65&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ef-0ozjHOKUAX-oxwxC&_nc_ht=scontent-eze1-1.xx&oh=00_AfDXlp0WXTP4Gxg5gjaxukhLPy3a1sKsAsf4NInF-BpRMg&oe=6554AD80" alt="Left" />
        <button className='button'>Contactar</button>
      </div>
      <div className="right-side">
        <img src="https://saltandomurosdotorg.files.wordpress.com/2013/01/mnba-neuquc3a9n.jpg" alt="Right" />
      </div>
    </div>
  );
};

export default Contact;
