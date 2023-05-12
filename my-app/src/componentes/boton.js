import React from "react";

function Botoncito() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
        <button
        onClick={handleClick}
        >
        boton
        </button>
    </div>
  );
}

export default Botoncito;