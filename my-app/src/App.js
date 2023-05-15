import React, { useState } from 'react';
import SettingsButton from './SettingsButton';
import StartMessage from './StartMessage';
import ButtonMute from './components/buttonMute/buttonMute';
import volumeSlider from './components/soundRegulator/volumeSlider'
import 'bootstrap/dist/css/bootstrap.min.css';
import VolumeSlider from './components/soundRegulator/volumeSlider';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(!showMessage); // Invierte el valor actual de showMessage
  };

  const containerStyle = {
    position:'relative' ,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url("https://www.rionegro.com.ar/wp-content/uploads/2023/04/museo-1.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',// Opacidad del fondo
    filter: 'brightness(80%)',
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: -1, // Fondo negro semitransparente
  };
  return (
    <div style={containerStyle}>
      {showMessage && <StartMessage />}
      <SettingsButton onClick={handleButtonClick} />
      <div style={overlayStyle}></div>
      <ButtonMute />
      <VolumeSlider />
    </div>
    
  );
}

export default App;
