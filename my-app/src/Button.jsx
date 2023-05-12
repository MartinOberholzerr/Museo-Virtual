import React from "react";

export function ButtonWithFunction() {
  const handleClick = () => {
    console.log("Button clicked!");
    
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      boton
    </button>
    
  )
}