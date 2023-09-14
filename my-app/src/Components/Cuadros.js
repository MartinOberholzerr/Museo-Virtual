import React from 'react';
import 'Cuadros.css';
function Cuadros(props){
    const { images } = props;
    
    return(
        <div className='cuadros'>
            { images.map((image, index) =>
            (
                <div className='image-box'
                key={index}>
                   
                    <img src={image.url} alt={image.title}/>

                    <div className="image-title">{image.title}</div>

                </div>
      ))}
      </div>
    );
  }
  export default Cuadros;