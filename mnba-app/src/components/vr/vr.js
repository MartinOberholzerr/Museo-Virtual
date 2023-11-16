import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Vr() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffff',
  };

  const imageStyle = {
    height: '80vh',
    zIndex: '999',
    opacity: 1,
    position: 'relative', // Add this to position the MNBA div within the image container
  };

  const mnbaStyle = {
    position: 'absolute',
    bottom: '8%', // Adjust the vertical position
    left: '3%', // Adjust the horizontal position
    color: '#000',
    fontSize: '20px',
    zIndex: '1000',
    background: '#ffff'
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
            src="https://momento360.com/e/u/f1564683d9d3481393355602681e173f?utm_campaign=embed&utm_source=other&size=medium&display-plan=truehttps://momento360.com/e/u/db23c8c5cfca4236912fe4e4d389b710?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
          {/* MNBA div on the first slide */}
          <div style={mnbaStyle}>MNBA 360.</div>
        </div>

        <div>
          <iframe
            title="VR 4"
            className="vr"
            src="https://momento360.com/e/u/3f92948890d048e6a88a281c3c0583f2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
          {/* MNBA div on the second slide */}
          <div style={mnbaStyle}>MNBA 360.</div>
        </div>

        <div>
          <iframe
            title="VR 3"
            className="vr"
            src="https://momento360.com/e/u/6c2a1951988244a58e16d3be28e4e00c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
          {/* MNBA div on the third slide */}
          <div style={mnbaStyle}>MNBA 360.</div>
        </div>

        <div>
          <iframe
            title="VR 2"
            className="vr"
            src="https://momento360.com/e/u/0897fe54100b4566b74745167a58f403?utm_campaign=embed&utm_source=other&heading=108.87&pitch=-6.04&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
          {/* MNBA div on the fourth slide */}
          <div style={mnbaStyle}>MNBA 360.</div>
        </div>

        <div>
          <iframe
            title="VR 1"
            className="vr"
            src="https://momento360.com/e/u/a194b404d22649f0b45bfce8a932d458?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
            style={imageStyle}
          ></iframe>
          {/* MNBA div on the fifth slide */}
          <div style={mnbaStyle}>MNBA 360.</div>
        </div>
      </Carousel>
    </div>
  );
}

export default Vr;
