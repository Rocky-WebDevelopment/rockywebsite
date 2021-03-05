import React from 'react';
import '../Certified/styles.css';
import facebook_partner from "../../assets/facebook_partner.png";
import google_partner from "../../assets/google_partner.png";

import pirelli from "../../assets/pirelli-logo.png";
import onstores from "../../assets/onstores.png";
import nacional from "../../assets/nacional.png";
import manole from "../../assets/manole.png";
import metzeler from "../../assets/metzeler.png";
import like from "../../assets/like.png";
import irobot from "../../assets/irobot.png";
import khanacademy from "../../assets/khan-academy.png";
import widmen from "../../assets/widmen.png";
import tjama from "../../assets/tjama.png";
import subviagens from "../../assets/subviagens.png";
import socopa from "../../assets/socopa.png";
import roldao from "../../assets/roldao.png";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Certified(){


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

                
                <div className="clients-logo-container">

                      <div className="conectors_box" >
                        <img src={pirelli}/>
                        <img src={onstores}/>
                        <img src={nacional}/>
                        <img src={manole}/>
                        <img src={like}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={widmen}/>
                        <img src={tjama}/>
                        <img src={subviagens}/>
                        <img src={socopa}/>
                        <img src={irobot}/>
                      </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Certified;

/*
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
                    
                    <div className="moving_container">
                      <div className="conectors_box" >
                        <img src={pirelli}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={onstores}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={nacional}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={manole}/>
                      </div>

                    
                      <div className="conectors_box" >
                        <img src={like}/>
                      </div>

                  </div>

                  <div className="second_moving_container">
                      <div className="conectors_box" >
                        <img src={widmen}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={tjama}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={subviagens}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={socopa}/>
                      </div>

                      <div className="conectors_box" >
                        <img src={irobot}/>
                      </div>
                  </div>
*/