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
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Roberto_Plate_%281%29.jpg' alt='card1' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Roberto Plate</h3>
              <p className='card-description'>Nacimiento:	9 de septiembre de 1940 Buenos Aires, Argentina (83 años)<br/>Nacionalidad: Argentina.<br/>Educación: Academia de Múnich. Ocupación: Pintor y escenógrafo.<br/>Distinciones: Juana de Arco en la hoguera de Arthur Honegger - Bomarzo de Alberto Ginastera. - Muerte en Venecia de Britten.</p>
            </div>
          </div>
          <div  className='card'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Delia_Cancela.jpg' alt='card2' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Delia Cancela</h3>
              <p className='card-description'>Nacimiento:	nacida en 1940 en Buenos Aires, Argentina(83 años)<br/>Nacionalidad: Argentina.<br/>Ocupación: artista pop y diseñadora de modas.<br/>Distinciones: Delia Cancela -s Retrospectiva - Pablo&Delia - The London Years - Delia Cancela: Un artista en la moda.</p>
            </div>
          </div>
          <div  className='card'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Luis_Felipe_No%C3%A9_-_Inauguraci%C3%B3n_de_la_muestra_%E2%80%9CErnesto_Deira._Identificaciones%22.jpg' alt='card3' className='card-image' />
            <div className='card-content'>
            <h3 className='card-title'>Luis Felipe Noé</h3>
              <p className='card-description'>Nacimiento: 26 de mayo de 1933 Buenos Aires, Argentina (90 años)<br/>Nacionalidad: Argentina.<br/>Ocupación: Artista (Pintura de personaje y arte abstracto), escritor, pintor y profesor.<br/>Área: Arte.<br/>Distinciones: Beca Guggenheim - Premio Nacional a la Trayectoria Artística (2019).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artistas;
