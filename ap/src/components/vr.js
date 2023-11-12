import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Vr() {
  const containerStyle = {
    width: '100%', // Establecer el ancho al 100% de la pantalla
    height: '100vh', // Establecer la altura al 100% de la pantalla
    display: 'flex',
    alignItems: 'center', // Centrar verticalmente el contenido
    justifyContent: 'center', // Centrar horizontalmente el contenido
  };

  return (
    <div style={containerStyle}>
      <Carousel
        style={{ width: '100%', height: '100%' }}
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <iframe
            title="VR 1"
            className="vr"
            src="https://momento360.com/e/u/a194b404d22649f0b45bfce8a932d458?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 2"
            className="vr"
            src="https://momento360.com/e/u/0897fe54100b4566b74745167a58f403?utm_campaign=embed&utm_source=other&heading=108.87&pitch=-6.04&field-of-view=75&size=medium&display-plan=true"
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 3"
            className="vr"
            src="https://momento360.com/e/u/6c2a1951988244a58e16d3be28e4e00c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 4"
            className="vr"
            src="https://momento360.com/e/u/3f92948890d048e6a88a281c3c0583f2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
          ></iframe>
        </div>
        <div>
          <iframe
            title="VR 5"
            className="vr"
            src="https://momento360.com/e/u/db23c8c5cfca4236912fe4e4d389b710?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
          ></iframe>
        </div>
      </Carousel>
    </div>
  );
}

export default Vr;
