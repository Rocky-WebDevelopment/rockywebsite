import React from 'react';
import '../Services/styles.css';
import AliceCarousel from 'react-alice-carousel';
import seocro from "../../assets/seo-cro.png";
import midiadigital from "../../assets/midiadigital.png";
import design from "../../assets/design.png";
import 'react-alice-carousel/lib/alice-carousel.css';

function Services() {
    
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
          <div className="carousel-item">
            <img className="carousel-image" src={midiadigital}/>
            <div className="carousel-text">
              <p style={{fontWeight: "bold", fontSize: "20px", paddingBottom: "5%"}}><b>Mídia Digital</b></p>
              <p>Gestão de Google Ads</p>
              <p>Gestão de Facebook Ads</p>
              <p>Planejamento da mídia</p>
              <p>Modelo de atribuição</p>
              <p>Merchant Center</p>
            </div>
          </div>
        </div>,

        <div className="item" data-value="2">
          <div className="carousel-item">
            <img className="carousel-image" src={seocro}/>
            <div className="carousel-text">
              <p style={{fontWeight: "bold", fontSize: "20px", paddingBottom: "5%"}}><b>SEO/ ASO</b></p>
              <p>Acompanhamento KW</p>
              <p>Consultoria com</p>
              <p>Implementação de SEO/ ASO</p>
              <p>Planejamento de Inbound</p>
              <p>Otimização de sites para melhor taxa de conversão</p>
            </div>
          </div>
        </div>,
        
        <div className="item" data-value="3">
          <div className="carousel-item">
            <img className="carousel-image" src={design}/>
            <div className="carousel-text">
              <p style={{fontWeight: "bold", fontSize: "20px", paddingBottom: "5%"}}><b>Design</b></p>
              <p>Criação de Key Visual</p>
              <p>Replicação de peças gráficas</p>
              <p>Criação e edição de vídeos</p>
              <p>Design de landing pages e sites</p>
            </div>
          </div>
        </div>,
    ];
    
  return(
    <div className="service-container">
        <h1>Serviços</h1>
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

export default Services;


/**
 * 
 * <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
        />
 */
