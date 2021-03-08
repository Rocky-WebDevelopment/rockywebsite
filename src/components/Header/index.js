import React, { useState } from 'react';
import '../Header/styles.css';
import logo from "../../assets/logo_branco.png";
import {Link} from 'react-router-dom';

function Header() {
 

  
  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <img alt="rocky logo" class="rocky_logo" src={logo}/>
        <span></span>
      </label>

      <ul class="menu__box">
        
        <li>
          <Link style={{textDecoration: "none"}} to={'/services'} className="nav-link">
            <a rel="noreferrer" rel="noreferrer" class="menu__item" href="#">SERVIÇOS</a>
          </Link>
        </li>
        <li>
          <a rel="noreferrer" class="menu__item" href="#">CONTATO</a></li>
        <li>
          <a rel="noreferrer" class="menu__item" href="#">TRABALHE CONOSCO</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

