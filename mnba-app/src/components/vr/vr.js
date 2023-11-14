import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Vr() {
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  };

  const imageStyle = {
    height: '80vh', // Ajusta el valor según tus necesidades para aumentar la altura de las imágenes
    Zindex: '999',
    background: 'rgba(0, 0, 0, 0.7)',
  };

  const controlDotsStyle = {
    display: 'none', // Inicialmente oculta la lista de control de puntos
  };
  
  return (
    
    <div style={containerStyle}>
      <Carousel
        style={{ width: '80%' }}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <iframe
            title="VR 5"
            className="vr"
            src="https://momento360.com/e/u/db23c8c5cfca4236912fe4e4d389b710?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 4"
            className="vr"
            src="https://momento360.com/e/u/3f92948890d048e6a88a281c3c0583f2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 3"
            className="vr"
            src="https://momento360.com/e/u/6c2a1951988244a58e16d3be28e4e00c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 2"
            className="vr"
            src="https://momento360.com/e/u/0897fe54100b4566b74745167a58f403?utm_campaign=embed&utm_source=other&heading=108.87&pitch=-6.04&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 1"
            className="vr"
            src="https://momento360.com/e/u/a194b404d22649f0b45bfce8a932d458?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
        </div>
      </Carousel>
    </div>
  );
}

export default Vr;