import React, { useState } from 'react';
import './BottomBar.css';

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={`bottom-9 bottomBar ${isVisible ? 'visible' : 'hidden'}`}>
     
      </div>
      <button className={`btn  bottom-toggle ${isVisible ? 'visible' : 'hidden'}`} onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Barra' : 'Mostrar Barra'}
      </button>
    </div>
  );
};

export default BottomBar;
