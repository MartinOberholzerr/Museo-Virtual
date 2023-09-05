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
        
        <img src="https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/53152826_1906868212769969_7942975593665003520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nyEfROJyOBkAX9ymATL&_nc_ht=scontent.faep9-1.fna&oh=00_AfCpclDNGsL6usqWfnGdWtA_FFxEfQzg3wDvMAiV-ovT3Q&oe=650500C2" alt="Left" />
        <button className='button'>Contactar</button>
      </div>
      <div className="right-side">
        <img src="https://scontent.faep9-2.fna.fbcdn.net/v/t31.18172-8/10669218_578231185633685_8003138082043079964_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=fzGXiAHQp04AX9xiLG5&_nc_ht=scontent.faep9-2.fna&oh=00_AfCnxFC6dospQmlWTgtbxI8HJGzJIiO_qACOyvtnQJwJSQ&oe=6504F99B" alt="Right" />
      </div>
    </div>
  );
};

export default Contact;
