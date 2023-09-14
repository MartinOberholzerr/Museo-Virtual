import React from 'react';
function Cuadros(props){
    const { images } = props;
    
    return(
        <div className='cuadros'>
            { images.map((image, index) =>
            (
                <div className='image-box'
                key={index}>
                    <img src={image.url} alt={image.title}/>
                    
                </div>
            )

            )}
        </div>
    )
}