import React, { useState } from 'react';

const VolumeSlider = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span>{volume}</span>
    </div>
  );
};

export default VolumeSlider;