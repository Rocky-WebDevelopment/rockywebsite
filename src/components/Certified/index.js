import React from 'react';
import '../Certified/styles.css';
import facebook_partner from "../../assets/facebook_partner.png";
import google_partner from "../../assets/google_partner.png";
import ccp from "../../assets/ccp.png";
import pirelli from "../../assets/pirelli-logo.png";
import cvcbrasil from "../../assets/cvcbrasil.png";
import fabercastell from "../../assets/faber-castell.png";
import athenasaude from "../../assets/athena-saude.png";
import abc from "../../assets/abc.png";
import jovempan from "../../assets/jovempan.png";
import etna from "../../assets/etna.png";
import khanacademy from "../../assets/khan-academy.png";
import grupopatria from "../../assets/grupo-patria.png";
import boschlogo from "../../assets/bosch-logo.png";
import telhanorte from "../../assets/telhanorte.png";
import brflogo from "../../assets/brf-logo.png";
import slowbeauty from "../../assets/slow-beaty.png";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Certified(){

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 1 },
    };

    const items = [
        <div className="item" data-value="1">
          <div className="second-carousel-item">
            <img src={ccp}/>
          </div>
        </div>,

        <div className="item" data-value="2">
          <div className="second-carousel-item">
            <img src={pirelli}/>
          </div>
        </div>,
        
        <div className="item" data-value="3">
          <div className="second-carousel-item">
            <img src={cvcbrasil}/>
          </div>
        </div>,

        <div className="item" data-value="3">
        <div className="second-carousel-item">
          <img src={athenasaude}/>
        </div>
        </div>,

        <div className="item" data-value="3">
                  <div className="second-carousel-item">
                    <img src={fabercastell}/>
                  </div>
                </div>,

        <div className="item" data-value="3">
        <div className="second-carousel-item">
          <img src={grupopatria}/>
        </div>
        </div>,

        <div className="item" data-value="3">
                  <div className="second-carousel-item">
                    <img src={khanacademy}/>
                  </div>
                </div>,

        <div className="item" data-value="3">
        <div className="second-carousel-item">
          <img src={jovempan}/>
        </div>
        </div>
    ];

    return(
        <div>
            <div className="certify-container">
                <h1>Certificações</h1>
                <div className="image-container">
                    <img src={google_partner}/>
                    <img className="facebook_logo"style={{width: "35%"}} src={facebook_partner}/>
                </div>
            </div>

            <div className="certify-container">
                <h1>Nossos Clientes</h1>

                <AliceCarousel
          mouseTracking
          autoPlay={true}
          items={items}
          responsive={responsive}
        >
        </AliceCarousel>
                <div className="image-container">
                    <div className="partners-logo-container">
                        <img src={fabercastell}/>
                        <img src={pirelli}/>
                        <img src={ccp}/>
                        <img src={cvcbrasil}/>
                        <img src={athenasaude}/>
                    </div>
                    
                    <div className="partners-logo-container">
                        <img src={etna}/>
                        <img src={khanacademy}/>
                        <img src={grupopatria}/>
                        <img src={jovempan}/>
                        <img src={abc}/>
                    </div>

                    <div className="partners-logo-container">
                        <img src={boschlogo}/>
                        <img src={telhanorte}/>
                        <img src={brflogo}/>
                        <img src={slowbeauty}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Certified;