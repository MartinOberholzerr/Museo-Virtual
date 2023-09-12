import React from 'react';

import styles from './home.module.css'; // Importa los estilos usando CSS Modules

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.square}>
        <div className={styles.innerContent}>
          <h2>MNBA</h2>
          <p className='lead'>¡Listos para comenzar la experiencia virtual!</p>
          <button>Comenzar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
