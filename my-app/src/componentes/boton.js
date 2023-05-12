import React from 'react';

function BotonBordo({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-bordo-500 hover:bg-bordo-600 text-white font-bold py-2 px-4 rounded"
    >
    
    </button>
  );
}
export default BotonBordo;
