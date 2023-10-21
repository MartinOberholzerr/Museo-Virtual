import React, { useState } from "react";
import Loading from "./components/loading";
//import Vr from "./components/vr";
//import Moving from "./components/move";


function App (){
    const [loading, setLoading] = useState(false);

    const cambiarEstado=()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      }, 5000);
    }
  if(Loading){
    return(
      <Loading></Loading>
    )
  }
  else{
  return(
    <div>
      <button onClick={()=>cambiarEstado()}>Reload</button>
    </div>
  );
}
}



export default App;