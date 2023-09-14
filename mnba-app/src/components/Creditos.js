import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Creditos.css';

const Creditos = () => {
  
  return (
    <div className='contenedor2'>
      <div className='fondo'>
        <h1 className='titulo'>CRÉDITOS</h1>
      </div>
      <Link to='/' className='button-link'>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </Link>
      <div className='container'>
          <div  className='img'>
          <img src='https://www.elciudadanogba.com/wp-content/uploads/2016/12/Museo-adentro.jpg' alt='foto1' className='imagen1' />
          </div>
      </div>
      <div className='container'>
          <div  className='img'>
          <img src='https://images.adsttc.com/media/images/5e72/cb54/b357/65c4/5c00/0101/slideshow/Cassa_Di_Risparmio.jpg?1584581452' alt='foto2' className='imagen2' />
          </div>
      </div>
      <div className='personas'>
        <p>
          persona1 <br/>
          persona2 <br/>
          persona3 <br/>
          persona4 <br/>
          persona5 <br/>
          persona6 <br/>
          persona7 <br/>
          persona8 <br/>
          persona9 <br/>
          persona10 <br/>
        </p>
      </div>
    </div>
  );
};

export default Creditos;
