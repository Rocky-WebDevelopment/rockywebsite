import React from 'react';
import './styles.css';
import logo from "../../assets/logo_branco.png";
function HeaderDesktop() {

  return (
    <div className="header-container">
        <div className="desktop-header">
          <img class="rocky_logo" src={logo}/>
          <button id="first_slide" class="slide">&nbsp;</button>
          <button id="second_slide" class="slide">&nbsp;</button>
          <button id="third_slide" class="slide">&nbsp;</button>
        </div>
    </div>
  );
}

export default HeaderDesktop;