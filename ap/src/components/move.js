import React from 'react';
import './move.css';

function Moving(){
    return(
    <div className='move'>
        <button id="izquierdaa">Izquierda</button>
        <button id="derechaa">Derecha</button>
    </div>
)}

document.getElementById('izquierda').addEventListener('click', function() {
  const iframe1 = document.getElementById('iframe1');
  const iframe2 = document.getElementById('iframe2');
  
  iframe1.style.display = 'block';
  iframe2.style.display = 'none';
});

document.getElementById('derecha').addEventListener('click', function() {
  const iframe1 = document.getElementById('iframe1');
  const iframe2 = document.getElementById('iframe2');
  
  iframe1.style.display = 'none';
  iframe2.style.display = 'block';
});


  
export default Moving