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
          Quer saber como a ROCKY pode te ajudar no desenvolvimento da sua estratégia de digital para alcançar resultados de sucesso? Arrasta para o lado que nossos clientes te explicam!
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
    <div className="first-carousel-container">
      <div id="mobile-headline" className="item-clients" data-value="1">
        <div className="client-stories-carousel">
          <div className="text-container">
            <h1 className="item1-title">
            FULL DIGITAL PERFORMANCE
            </h1>
            <h1 className="item1-description">
            Quer saber como a ROCKY pode te ajudar no desenvolvimento da sua estratégia de digital para alcançar resultados de sucesso? Arrasta para o lado que nossos clientes te explicam!
            </h1>
          </div>
        </div>
        </div>

      <AliceCarousel
          disableButtonsControls={true}
          mouseTracking
          items={items}
          responsive={responsive}
        >
      </AliceCarousel>
    </div>
  );
}

export default Carousel;