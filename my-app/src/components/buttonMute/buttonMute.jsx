import React, { useState } from 'react';

const ButtonMute = () => {
  const [muted, setMuted] = useState(false);

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  return (
    <button className='btn btn-success' onClick={handleMuteToggle}>
      {muted ? 'Unmute' : 'Mute'}
    </button>
  );
};

export default ButtonMute;