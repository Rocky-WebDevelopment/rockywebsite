import React from 'react';
import './styles.css';
import logo from "../../assets/logo_branco.png";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 1 },
  };

  const items = [
    <div id="first-box" className="item-clients" data-value="1">
      <div className="client-stories-carousel">
        <div className="text-container">
          <h1 className="item1-title">
          FULL DIGITAL PERFORMANCE
          </h1>
          <h1 className="item1-description">
          Identificou que o digital é onde sua empresa pode crescer,<br/> mas ainda não conseguiu definir quais objetivos traçar e como atingi-los?
          </h1>
        </div>
      </div>
    </div>,

    <div id="second-box" className="item-clients" data-value="1">
    <div className="client-stories-carousel">
      
    </div>
    </div>,

    <div id="third-box" className="item-clients" data-value="1">
    <div className="client-stories-carousel">
      
    </div>
    </div>,

    <div id="fourth-box" className="item-clients" data-value="1">
    <div className="client-stories-carousel">
      
    </div>
    </div>,

    <div id="fifth-box" className="item-clients" data-value="1">
    <div className="client-stories-carousel">
      
    </div>
    </div>
  ];

  return (
    <AliceCarousel
          disableButtonsControls={true}
          mouseTracking
          items={items}
          responsive={responsive}
        >
    </AliceCarousel>
  );
}

export default Carousel;