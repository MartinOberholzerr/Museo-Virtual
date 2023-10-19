import React from "react";
import Loading from "./components/loading";
import Vr from "./components/vr";
import Moving from "./components/move";

function App (){
    <div>
    <Loading /> 
    </div>
    
  return(
    <div>
     <Vr/>
     <Moving/>
    </div>
  )
}

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


export default App;