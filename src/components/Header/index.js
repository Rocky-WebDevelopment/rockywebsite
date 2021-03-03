import React, { useState } from 'react';
import '../Header/styles.css';
import logo from "../../assets/logo_branco.png";
import HamburgerMenu from 'react-hamburger-menu';

function Header() {
 

  
  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <img class="rocky_logo" src={logo}/>
        <span></span>
      </label>

      <ul class="menu__box">
        <li><a class="menu__item" href="#">QUEM SOMOS</a></li>
        <li><a class="menu__item" href="#">SERVIÇOS</a></li>
        <li><a class="menu__item" href="#">DIFERENCIAIS</a></li>
        <li><a class="menu__item" href="#">CONTATO</a></li>
        <li><a class="menu__item" href="#">TRABALHE CONOSCO</a></li>
        <li><a class="menu__item" href="#">ROCKY NA MÍDIA</a></li>
      </ul>
    </div>
  );
}

export default Header;

