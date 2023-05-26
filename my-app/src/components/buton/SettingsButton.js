import React from 'react';
import './settingsButton.css';

const SettingsButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <div className="background-square"></div>
      <div className="button-text">
        <p className='text'>M N B A</p>
        <p className='subText'>Ingresar a nuestra experiencia virtual</p>
      </div>
      <button className="btn btn custom-button" onClick={onClick} style={{ backgroundColor: '#ebebeb', borderRadius: '0', width: '200px' }}>
        Comenzar
      </button>
    </div>
  );
};

export default SettingsButton;
