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
          <img src='https://www.bellasartes.gob.ar/media/uploads/coleccion/11942.jpg' alt='card3' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>América II</h3>
              <p className='card-description'> Esta pintura captura la belleza serena de un amanecer en el bosque. Los tonos suaves y cálidos del sol naciente iluminan el dosel del bosque, creando una atmósfera tranquila y mágica. Los detalles meticulosos de los árboles y las hojas hacen que esta obra sea una celebración</p>
            </div>
          </div>
          <div className='card'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Delia_Cancela.jpg' alt='card1' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Delia Cancela</h3>
              <p className='card-description'>Delia Cancela (nacida en 1940 en Buenos Aires, Argentina) es una artista pop y diseñadora de modas argentina. Vivió en Argentina, Nueva York, Londres y Paris, ciudades donde desarrolló exposiciones. Exhibiciones retrospectivas de sus trabajos y colaboraciones con Pablo Mesejean.</p>
            </div>
          </div>
          <div  className='card'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/c8/Roberto_Jacoby_en_la_presentaci%C3%B3n_de_%22Imaginaci%C3%B3n_Pol%C3%ADtica_-_Proyecto_Ballena_2023%22.jpg' alt='card2' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Roberto Jacoby</h3>
              <p className='card-description'>Nacimiento: 29 de julio de 1944. Buenos Aires - Argentina (79 años).<br/>Nacionalidad: argentina<br/>Ocupación:	Sociólogo, artista, letrista<br/>Distinciones: Beca Guggenheim - Primer Manifiesto del Arte y Los Medios. - Premio Nacional a la Trayectoria Artística (2018)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artistas;
