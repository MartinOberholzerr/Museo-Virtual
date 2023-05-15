import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h3 className="text-danger font-weight-light">Control de Volumen</h3>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>Volumen: {volume}</p>
        </div>
      </div>
    </div>
  );
};

export default VolumeSlider;