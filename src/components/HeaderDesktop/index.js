import React from 'react';
import './styles.css';
import logo from "../../assets/logo_branco.png";
import {Link} from 'react-router-dom';
function HeaderDesktop() {

  return (
    <div className="header-container">
        <div className="desktop-header">
          <Link to={'/'} className="nav-link">
            <img alt="rocky-logo" class="rocky_logo" src={logo}/>
          </Link>

          <Link style={{textDecoration: "none"}} to={'/services'} className="nav-link">
            <button id="first_slide" class="slide">&nbsp;</button>
          </Link>

          <Link style={{textDecoration: "none"}} to={'/contato'} className="nav-link">
            <button id="second_slide" class="slide">&nbsp;</button>
          </Link>

          <Link style={{textDecoration: "none"}} to={'/'} className="nav-link">
            <button id="third_slide" class="slide">&nbsp;</button>
          </Link>
        </div>
    </div>
  );
}

export default HeaderDesktop;