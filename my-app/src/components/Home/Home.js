import React, { useState } from 'react';


import './settingsButton.css';

function Home({ onClick }) {
    return (
      <div className="container">
        <div className="button-container">
          <div className="background-square"></div>
          <div className="button-text">
            <p className='text'>M N B A</p>
            <p className='subText'>Ingresar a nuestra experiencia virtual</p>
          </div>
          <button className="btn custom-button" onClick={onClick} style={{ backgroundColor: '#ebebeb', borderRadius: '0', width: '200px' }}>
            Comenzar
          </button>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
  
  export default Home;
  