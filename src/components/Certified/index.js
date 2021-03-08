import React from 'react';
import '../Certified/styles.css';
import facebook_partner from "../../assets/facebook_partner.png";
import google_partner from "../../assets/google_partner.png";

import pirelli from "../../assets/pirelli-logo.png";
import onstores from "../../assets/onstores.png";
import subviagens from "../../assets/subviagens.png";
import socopa from "../../assets/socopa.png";
import telhanorte from '../../assets/telhanorte.png';
import technos from '../../assets/Technos.png';
import slang from '../../assets/Slang.png';
import heliar from '../../assets/Heliar.png';
import loungerie from '../../assets/Loungerie.png';
import cvc from '../../assets/cvcbrasil.png';

import 'react-alice-carousel/lib/alice-carousel.css';

function Certified(){


    return(
        <div>
            <div className="certify-container">
                <h1>Certificações</h1>
                <div className="image-container">
                    <img alt="certificacao" src={google_partner}/>
                    <img alt="certificacao" className="facebook_logo"style={{width: "35%"}} src={facebook_partner}/>
                </div>
            </div>

            <div className="certify-container">
                <h1>Nossos Clientes</h1>

                
                <div className="clients-logo-container">

                      <div className="conectors_box" >
                        <img alt="logos de cliente" src={pirelli}/>
                        <img alt="logos de cliente" className="fix-icons" src={onstores}/>
                        <img alt="logos de cliente" src={telhanorte}/>
                        <img alt="logos de cliente" src={technos}/>
                        <img alt="logos de cliente" src={slang}/>
                      </div>

                      <div className="conectors_box" >
                        <img alt="logos de cliente" src={loungerie}/>
                        <img alt="logos de cliente" src={heliar}/>
                        <img alt="logos de cliente" className="fix-icons" src={subviagens}/>
                        <img alt="logos de cliente" src={socopa}/>
                        <img alt="logos de cliente" className="fix-icons" src={cvc}/>
                      </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Certified;
