import React from 'react';
import './styles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo from "../../assets/logo_branco.png";
function Carousel() {

  return (
    <div className="header-container">
        <div className="desktop-header">
          <img class="rocky_logo" src={logo}/>
          <button id="first_slide" class="slide">&nbsp;</button>
          <button id="second_slide" class="slide">&nbsp;</button>
          <button id="third_slide" class="slide">&nbsp;</button>
        </div>
        <div className="text-container">
          <h1 className="item1-title">
            FULL DIGITAL PERFORMANCE
          </h1>
          <h1 className="item1-description">
          Identificou que o digital é onde sua empresa pode crescer,<br/> mas ainda não conseguiu definir quais objetivos traçar e como atingi-los?
          </h1>
        </div>
      
    </div>
  );
}

export default Carousel;