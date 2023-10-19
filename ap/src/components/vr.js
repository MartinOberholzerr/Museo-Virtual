import React from 'react';
import './vr.css';

function Vr(){
    
return(
    <div>
        <iframe id="iframe1" className='vr' src='https://momento360.com/e/u/1bb8634342d848d6b68fb1737fc543a0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true'></iframe>
        <iframe id="iframe2" className='vr none' src="https://momento360.com/e/u/0104bc85af4b41e382a6430c71166279?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"></iframe>
    </div>
    
    )}


export default Vr