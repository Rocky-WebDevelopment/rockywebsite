import React from 'react';
import '../Footer/styles.css';
//import foot from "../../assets/Footer.png";
import rocky from "../../assets/logo_footer_rocky.png";
import mailicon from "../../assets/mailicon.svg";
import phoneicon from "../../assets/phoneicon.svg";
import locationicon from "../../assets/location_icon.svg";
import facebook_icon from "../../assets/facebook_icon.svg";
import instagram_icon from "../../assets/instagram_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
function Footer() {
    

  return(
    <div  className="footer-container">
        <p className="footer-headline">
          Oportunidades no Digital existem para todos.<br/> Vamos trabalhar juntos para transformar oportunidades em resultados reais para sua empresa!
        </p>
        <img alt ="logo rocky" src={rocky}/>
        <div className="icons-container">
          <div className="spans-container">
            <img alt ="email" id="email" style={{width:"22%", padding: "0%"}} src={mailicon}/>
            <span>contato@rocky.ag</span>
          </div>
          <div className="spans-container">
            <img alt="telefone" id="phone" style={{width:"22%", padding: "0%"}} src={phoneicon}/>
            <span>(15) 3321-1105</span>
          </div>
          <div className="spans-container" >
            <img alt="localizacao" id="local" style={{width:"3%", padding: "0%"}} src={locationicon}/>
            <span>R. Romeu do Nascimento, 247 - Jardim Portal da Colina, Sorocaba - SP, 18047-410 , 2º andar
            </span>
          </div>
        </div>
        <div className="media-container">
          <a href="https://www.facebook.com/RockyDigitalPerformance/" rel="noreferrer" target="_blank">
            <img alt="facebook" style={{width: "4.5%"}} src={facebook_icon}/>
          </a>

          <a href="https://www.instagram.com/agencia.rocky/" rel="noreferrer" target="_blank">
            <img alt="instagram" style={{width: "7.5%"}} src={instagram_icon}/>
          </a>

          <a href="https://www.linkedin.com/company/rocky-ag/" rel="noreferrer" target="_blank">
            <img alt="linkedin" style={{width: "7.5%"}} src={linkedin_icon}/>
          </a>
        </div>
    </div>
  );
}

export default Footer;