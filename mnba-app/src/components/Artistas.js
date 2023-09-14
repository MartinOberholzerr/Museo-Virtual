import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Artistas.css';

const Artistas = () => {
    return (
    <div className='contenedor'>
      <nav className='nav'>
        <h1 className='Title'>ARTISTAS</h1>
      </nav>
      <Link to='/' className='button-link'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </Link>

      <div className='centered-container'>
        <div className='card-container'>
          <div  className='card'>
          <img src='https://th.bing.com/th/id/R.702f4962bdebb9e54c23fa0109ca18ba?rik=z1Z7IKWfj6%2bvrA&pid=ImgRaw&r=0' alt='card3' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Amanecer en el Bosque</h3>
              <p className='card-description'> Esta pintura captura la belleza serena de un amanecer en el bosque. Los tonos suaves y cálidos del sol naciente iluminan el dosel del bosque, creando una atmósfera tranquila y mágica. Los detalles meticulosos de los árboles y las hojas hacen que esta obra sea una celebración</p>
            </div>
          </div>
          <div className='card'>
          <img src='https://th.bing.com/th/id/R.55603848a0be32d6322a2ad9d29f428d?rik=HdTs1WJPu9mHMQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-sxuCZ8ugPm8%2fU3QWXB0WwJI%2fAAAAAAAA85Y%2frlyzKfJQvpk%2fs1600%2fcuadros-decorativos-de-abstractos-al-oleo.jpg&ehk=InpmtmSHliuZK6MPCFMUC%2boM9pw6C4JLZg%2bUz%2f8pU4s%3d&risl=&pid=ImgRaw&r=0' alt='card1' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Abstracción en Azul</h3>
              <p className='card-description'>Esta obra de arte abstracta utiliza una paleta de azules profundos y formas geométricas para evocar una sensación de calma y misterio. Las texturas y los tonos cambiantes invitan al espectador a explorar el mundo de la abstracción, donde la interpretación es libre y personal.</p>
            </div>
          </div>
          <div  className='card'>
          <img src='https://th.bing.com/th/id/OIP.vHMlepemjnRJIL5Asr5WEQHaE7?pid=ImgDet&rs=1' alt='card2' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Retrato a la concns</h3>
              <p className='card-description'>En este retrato, el artista ha capturado la introspección y la serenidad de su sujeto. La mirada profunda y pensativa del retratado invita a reflexionar sobre los misterios de la mente humana. La paleta de colores suaves y la técnica detallada destacan la expresión facial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artistas;
