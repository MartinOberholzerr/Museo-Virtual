import React, { useState } from 'react';
import './interactiveBar.css';

function InteractiveBar() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!visible);
      };

return(
    <div className={`interactive-bar ${visible ? 'visible' : 'hidden'}`}> 
    <button onClick={toggleVisibility}>Mostrar/ocultar barra</button>
</div>
);
}
export default InteractiveBar;